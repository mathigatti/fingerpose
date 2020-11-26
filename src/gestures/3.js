import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const threeDescription = new GestureDescription('3');


// thumb:
threeDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
threeDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

// index:
threeDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
threeDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring:
threeDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// pinky:
threeDescription.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
threeDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

export default threeDescription;
