import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const oneDescription = new GestureDescription('2');


// thumb:
oneDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
oneDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

// index:
oneDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
oneDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring:
oneDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky:
oneDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

export default oneDescription;
