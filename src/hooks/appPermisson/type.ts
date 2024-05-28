import { PermissionStatus } from 'react-native';

export type AppPermissionType = 'writeFiles' | 'readFiles';
export type PlatformType = 'ios' | 'android';
export type PermissionType =
  | 'ios.permission.PHOTO_LIBRARY'
  | 'android.permission.WRITE_EXTERNAL_STORAGE'
  | 'android.permission.READ_EXTERNAL_STORAGE';
export type AppPermissionTypeRecord = Record<
  | 'ios.permission.PHOTO_LIBRARY'
  | 'android.permission.WRITE_EXTERNAL_STORAGE'
  | 'android.permission.READ_EXTERNAL_STORAGE',
  PermissionStatus
>;
