import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const fiveDescription = new GestureDescription('5');


// thumb:
fiveDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.);
fiveDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, -1.0);
fiveDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, -1.0);

// index:
fiveDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.);

// middle:
fiveDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.);

// ring:
fiveDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.);

// pinky:
fiveDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.);
fiveDescription.addCurl(Finger.Pinky, FingerCurl.HalfCurl, -1.0);
fiveDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, -1.0);

export default fiveDescription;
