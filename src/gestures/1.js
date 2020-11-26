import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const twoDescription = new GestureDescription('1');


// thumb:
twoDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
twoDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

// index:
twoDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
twoDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

// ring:
twoDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky:
twoDescription.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
twoDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

export default twoDescription;
