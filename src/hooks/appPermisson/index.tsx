import { checkMultiple, PERMISSIONS, requestMultiple, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';
import { AppPermissionType, PermissionType, PlatformType } from './type';

const PLATFORM_WRITE_EXTERNAL_STORAGE_PERMISSION = {
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
};

const PLATFORM_READ_EXTERNAL_STORAGE_PERMISSION = {
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
};

const PLATFORM_CAMERA_PERMISSION = {
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
};

const REQUEST_PERMISSION_TYPE = {
  writeFiles: PLATFORM_WRITE_EXTERNAL_STORAGE_PERMISSION,
  readFiles: PLATFORM_READ_EXTERNAL_STORAGE_PERMISSION,
  camera: PLATFORM_CAMERA_PERMISSION,
};

const PERMISSIONS_TYPE = {
  writeFiles: 'writeFiles',
  readFiles: 'readFiles',
};

export class AppPermission {
  async check(permissionType: AppPermissionType[]): Promise<boolean> {
    const permissionList = permissionType.map(
      permission => REQUEST_PERMISSION_TYPE[permission][Platform.OS as PlatformType],
    );

    if (!permissionList || permissionList.length === 0) {
      return false;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = (await checkMultiple(permissionList)) as any;
      const permissionToRequest = Object.keys(result).filter(permission => result[permission] !== RESULTS.GRANTED);
      if (permissionToRequest.length === 0) return true;
      return await this.requestPermission(permissionToRequest as PermissionType[]);
    } catch (error) {
      return false;
    }
  }

  async requestPermission(permissions: PermissionType[]): Promise<boolean> {
    try {
      const result = await requestMultiple(permissions);
      return RESULTS.GRANTED in result && Object.values(result).every(value => value === RESULTS.GRANTED);
    } catch (error) {
      return false;
    }
  }
}

const appPermission = new AppPermission();

export { appPermission, PERMISSIONS_TYPE };
