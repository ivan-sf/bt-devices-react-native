import BluetoothSerial from 'react-native-bluetooth-serial';

export async function getAvailableDevices() {
  try {
    const devices = await BluetoothSerial.list();
    return devices;
  } catch (error) {
    throw error;
  }
}
