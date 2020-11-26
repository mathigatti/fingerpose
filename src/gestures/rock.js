import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const rockDescription = new GestureDescription('rock');


// thumb:
rockDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

// index:
rockDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
rockDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
rockDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, -1.0);
rockDescription.addCurl(Finger.Middle, FingerCurl.HalfCurl, -1.0);

// ring:
rockDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky:
rockDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
rockDescription.addCurl(Finger.Pinky, FingerCurl.HalfCurl, -1.0);
rockDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, -1.0);

export default rockDescription;
