import RNFS from 'react-native-fs';
import { Language, parametrizeText } from './types';
import { ALWAYS_PARAMETRIZE_TEXT_VERSION, BACKEND_ROUTES, BACKEND_URL } from '../../constants/_backConstants';
import localParametrizeFiles_ES from './localParametrizeFiles_ES.json';
import localParametrizeFiles_EN from './localParametrizeFiles_EN.json';
export default class Parametrization {
  path: string;
  language: Language;
  constructor(language: Language) {
    this.language = language;
    this.path = RNFS.DocumentDirectoryPath + '/src/lang/' + language + '.json';
  }
  //verify if the parametrization file exists
  async exists(): Promise<boolean> {
    return await RNFS.exists(this.path);
  }

  //get all the text from the parametrization file
  async getText(): Promise<typeof localParametrizeFiles_ES | undefined> {
    const data = await RNFS.readFile(this.path, 'utf8')
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('no read file ' + error);
        return undefined;
      });
    const json = data ? JSON.parse(data) : undefined;
    return json;
  }

  //get the version of the parametrization file
  async getVersion(): Promise<string | boolean> {
    //Verify if the file exists
    if (!(await this.exists())) return ALWAYS_PARAMETRIZE_TEXT_VERSION;
    const data: typeof localParametrizeFiles_ES = await RNFS.readFile(this.path, 'utf8')
      .then(data => {
        return JSON.parse(data);
      })
      .catch(error => {
        console.error('no read file' + error);
        return { version: ALWAYS_PARAMETRIZE_TEXT_VERSION };
      });
    return data.version;
  }

  //write the new parametrization
  async writeParametrization(parametrization: parametrizeText): Promise<boolean> {
    //Verify if the file exists
    const fileExists = await this.exists();
    //If exists, delete it
    if (fileExists) {
      await RNFS.unlink(this.path);
    }
    //Create the new file with the new parametrization
    if (!fileExists) {
      await RNFS.mkdir(this.path);
    }
    //Write the new parametrization
    const write = await RNFS.writeFile(this.path, JSON.stringify(parametrization, null, 2), 'utf8')
      .then(() => {
        return true;
      })
      .catch(error => {
        console.error('no write file' + error);
        return false;
      });

    return write;
  }

  //Get the parametrization from the server in case of change
  async getParametrizationFromServer(): Promise<typeof localParametrizeFiles_ES> {
    //Lest consult to database
    const data = await fetch(BACKEND_URL + BACKEND_ROUTES.v1.parametrize)
      .then(response => response.json())
      .then(data => data)
      .catch(() => {
        switch (this.language) {
          case 'es':
            return localParametrizeFiles_ES;
          case 'en':
            return localParametrizeFiles_EN;
          default:
            return false;
        }
      });

    return data;
  }

  //Verify if the version of the parametrization file changed
  async checkIfTheVersionChanged(): Promise<boolean> {
    const localVersion = await this.getVersion();
    const consultVersion = await fetch(BACKEND_URL + BACKEND_ROUTES.v1.parametrize + '/version')
      .then(response => response.json())
      .then(data => data.version)
      .catch(() => {
        return ALWAYS_PARAMETRIZE_TEXT_VERSION;
      });

    //Verify if the file exists
    const fileExists = await this.exists();
    if (!fileExists) return false;

    return localVersion !== consultVersion;
  }
}
