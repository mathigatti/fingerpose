import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const zeroDescription = new GestureDescription('0');


// thumb:
zeroDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
zeroDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

// index:
zeroDescription.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

// middle:
zeroDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

// ring:
zeroDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky:
zeroDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

export default zeroDescription;
