import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const fourDescription = new GestureDescription('4');


// thumb:
fourDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fourDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

// index:
fourDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
fourDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring:
fourDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// pinky:
fourDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

export default fourDescription;
