
import { TextbookLink, NIELink, GradeCurriculum } from './types';

export const CURRICULUM: GradeCurriculum[] = [
  {
    grade: "6",
    lessons: [
      { id: "6-1", term: 1, name: "வட்டம்", periods: 3, subUnits: [{ id: "1.1", name: "வட்ட வடிவ பொருட்கள்" }, { id: "1.2", name: "வட்ட வடிவ அலங்காரங்கள்" }] },
      { id: "6-2", term: 1, name: "இடப்பெறுமானம்", periods: 6, subUnits: [{ id: "2.1", name: "பில்லியன் வரை எண்களை வாசித்தல்" }, { id: "2.2", name: "இலக்கங்களின் இடப்பெறுமானமும் பெறுமானமும்" }] },
      { id: "6-3", term: 1, name: "முழு எண்களுடனான கணித செய்கைகள்", periods: 10, subUnits: [{ id: "3.1", name: "முழு எண்களில் கூட்டல்" }, { id: "3.2", name: "முழு எண்களில் கழித்தல்" }, { id: "3.3", name: "பெருக்குதலும் வகுத்தலும்" }] },
      { id: "6-4", term: 1, name: "காலம்", periods: 6, subUnits: [{ id: "4.1", name: "நேரமும் நேர ஆயிடைக்கும் வித்தியாசம்" }, { id: "4.2", name: "கால அலகுகளுக்கிடையிலான தொடர்பு" }, { id: "4.3", name: "காலத்தை கூட்டலும் கழித்தலும்" }] },
      { id: "6-5", term: 1, name: "எண்கோடு", periods: 11, subUnits: [{ id: "5.1", name: "மறை எண்கள் அறிமுகம்" }, { id: "5.2", name: "நிறை எண்கள் (Integers)" }, { id: "5.3", name: "எண்கோட்டில் ஒப்பிடல்" }] },
      { id: "6-6", term: 1, name: "அண்ணளவாக்கம் & மட்டந்தட்டல்", periods: 8, subUnits: [{ id: "6.1", name: "மதிப்பிடல்" }, { id: "6.2", name: "கிட்டிய 10 இற்கு மட்டந்தட்டல்" }] },
      { id: "6-7", term: 1, name: "கோணங்கள்", periods: 5, subUnits: [{ id: "7.1", name: "செங்கோணத்தை அடிப்படையாகக் கொண்டு வகைப்படுத்தல்" }, { id: "7.2", name: "கூர்ங்கோணம், விரிகோணம், நேர்கோணம், பின்வளைகோணம்" }] },
      { id: "6-8", term: 2, name: "திசைகள்", periods: 5, subUnits: [{ id: "8.1", name: "எட்டுத் திசைகள்" }, { id: "8.2", name: "நிலைக்குத்தும் கிடையும்" }] },
      { id: "6-9", term: 2, name: "பின்னம்", periods: 12, subUnits: [{ id: "9.1", name: "அலகுப் பின்னம் & முறைமைப் பின்னம்" }, { id: "9.2", name: "சமவலுப் பின்னங்கள்" }, { id: "9.3", name: "பின்னங்களை ஒப்பிடல்" }, { id: "9.4", name: "பின்னக் கூட்டலும் கழித்தலும்" }] },
      { id: "6-10", term: 2, name: "தெரிதல்", periods: 4, subUnits: [{ id: "10.1", name: "பொதுப்பண்புகளுக்கேற்ப கூட்டமாக்குதல்" }, { id: "10.2", name: "கூட்டங்களுக்கு பெயரிடல்" }] },
      { id: "6-11", term: 2, name: "காரணிகள் & மடங்குகள்", periods: 9, subUnits: [{ id: "11.1", name: "10x10 அட்டவணை மூலம் காரணிகள்" }, { id: "11.2", name: "மடங்குகளைக் கண்டறிதல்" }, { id: "11.3", name: "வகுபடு தன்மை (2, 5, 10)" }] },
      { id: "6-12", term: 2, name: "நேர்கோட்டுத் தளவுருக்கள்", periods: 4, subUnits: [{ id: "12.1", name: "சதுரம், செவ்வகம், முக்கோணி இயல்புகள்" }, { id: "12.2", name: "இணைகரம், சரிவகம் அறிமுகம்" }] },
      { id: "6-13", term: 2, name: "தசமங்கள்", periods: 6, subUnits: [{ id: "13.1", name: "தசம எண்களை இனங்காணலும் ஒப்பிடலும்" }, { id: "13.2", name: "தசமக் கூட்டலும் கழித்தலும்" }] },
      { id: "6-14", term: 2, name: "எண்வகைகள் & எண்கோலங்கள்", periods: 10, subUnits: [{ id: "14.1", name: "ஒற்றை, இரட்டை எண்கள்" }, { id: "14.2", name: "முதன்மை, சேர்த்தி எண்கள்" }, { id: "14.3", name: "சதுர, முக்கோண எண்கள்" }] },
      { id: "6-15", term: 2, name: "நீளம்", periods: 8, subUnits: [{ id: "15.1", name: "நீள அலகுகள் (mm, cm, m, km)" }, { id: "15.2", name: "அலகு மாற்றமும் அளத்தலும்" }, { id: "15.3", name: "சுற்றளவு காணல்" }] },
      { id: "6-16", term: 2, name: "திரவ அளவீடுகள்", periods: 4, subUnits: [{ id: "16.1", name: "மில்லிலீற்றர், லீற்றர் தொடர்புகள்" }, { id: "16.2", name: "திரவ அளவுகளைக் கூட்டலும் கழித்தலும்" }] },
      { id: "6-17", term: 2, name: "திண்மங்கள்", periods: 8, subUnits: [{ id: "17.1", name: "சதுரமுகி, கனவுரு, ஒழுங்கான நான்முகி" }, { id: "17.2", name: "உச்சிகள், விளிம்புகள், முகங்கள்" }] },
      { id: "6-18", term: 3, name: "அட்சர கணிதக் குறியீடுகள்", periods: 4, subUnits: [{ id: "18.1", name: "தெரியாமாறிலியை வகைக்குறித்தல்" }, { id: "18.2", name: "மாறிகளை இனங்காணல்" }] },
      { id: "6-19", term: 3, name: "அட்சரக் கோவைகள்", periods: 4, subUnits: [{ id: "19.1", name: "அட்சரக் கோவைகளை அமைத்தல்" }, { id: "19.2", name: "கோவைகளில் பிரதியிடுதல்" }] },
      { id: "6-20", term: 3, name: "திணிவு", periods: 5, subUnits: [{ id: "20.1", name: "கிராம், கிலோகிராம் அலகுகள்" }, { id: "20.2", name: "அலகு மாற்றமும் கணிப்புகளும்" }] },
      { id: "6-21", term: 3, name: "விகிதம்", periods: 6, subUnits: [{ id: "21.1", name: "இரு கணியங்களுக்கிடையிலான விகிதம்" }, { id: "21.2", name: "சமவலு விகிதங்கள்" }] },
      { id: "6-22", term: 3, name: "தரவுகளை சேகரித்தல்", periods: 6, subUnits: [{ id: "22.1", name: "வரவுக்குறிகள் மூலம் தரவுச் சேகரிப்பு" }, { id: "22.2", name: "அட்டவணை & பட வரைபு" }] },
      { id: "6-23", term: 3, name: "தரவுகளுக்கு விளக்கம் கூறல்", periods: 5, subUnits: [{ id: "23.1", name: "வரைபுகளை விபரித்தல்" }] },
      { id: "6-24", term: 3, name: "சுட்டிகள்", periods: 5, subUnits: [{ id: "24.1", name: "சுட்டிக் குறிப்பீடும் வலுவும்" }] },
      { id: "6-25", term: 3, name: "பரப்பளவு", periods: 3, subUnits: [{ id: "25.1", name: "மேற்பரப்பு எண்ணக்கரு" }, { id: "25.2", name: "சதுரம், செவ்வகத்தின் பரப்பளவு" }] }
    ]
  },
  {
    grade: "7",
    lessons: [
      { id: "7-1", term: 1, name: "முழு எண்களைச் சுருக்குதல்", periods: 4, subUnits: [{ id: "1.1", name: "கணிதச் செய்கைகளின் வரிசை" }] },
      { id: "7-2", term: 1, name: "திசை கொண்ட எண்கள்", periods: 6, subUnits: [{ id: "2.1", name: "எண்கோட்டில் கூட்டல்" }] },
      { id: "7-3", term: 1, name: "காரணிகளும் மடங்குகளும்", periods: 6, subUnits: [{ id: "3.1", name: "பொ.கா.உ மற்றும் பொ.ம.சி" }] },
      { id: "7-4", term: 1, name: "வகுபடுதன்மை", periods: 5, subUnits: [{ id: "4.1", name: "2,3,4,5,6,9 ஆல் வகுபடுதல்" }] },
      { id: "7-5", term: 1, name: "பின்னங்கள்", periods: 10, subUnits: [{ id: "5.1", name: "பின்னங்களை ஒப்பிடல்" }, { id: "5.2", name: "பின்னக் கூட்டலும் கழித்தலும்" }] },
      { id: "7-6", term: 2, name: "தசமங்கள்", periods: 6, subUnits: [{ id: "6.1", name: "தசமக் கூட்டல், கழித்தல்" }] },
      { id: "7-7", term: 2, name: "விகிதம்", periods: 6, subUnits: [{ id: "7.1", name: "விகிதங்களைச் சுருக்குதல்" }] },
      { id: "7-8", term: 2, name: "நீளம்", periods: 5, subUnits: [{ id: "8.1", name: "நீள அலகுகளுக்கிடையிலான தொடர்பு" }] },
      { id: "7-9", term: 2, name: "சுற்றளவு", periods: 3, subUnits: [{ id: "9.1", name: "தளவுருக்களின் சுற்றளவு" }] },
      { id: "7-10", term: 2, name: "பரப்பளவு", periods: 5, subUnits: [{ id: "10.1", name: "சதுரம், செவ்வகம்" }] },
      { id: "7-11", term: 3, name: "அட்சர கணிதக் கோவைகள்", periods: 4, subUnits: [{ id: "11.1", name: "கோவைகளை அமைத்தல்" }] },
      { id: "7-12", term: 3, name: "சமன்பாடுகள்", periods: 5, subUnits: [{ id: "12.1", name: "எளிய சமன்பாடுகளைத் தீர்த்தல்" }] }
    ]
  },
  {
    grade: "8",
    lessons: [
      { id: "8-1", term: 1, name: "நிறைவர்க்க எண்கள் & வர்க்கமூலம்", periods: 5, subUnits: [{ id: "1.1", name: "வர்க்க எண்களை இனங்காணல்" }, { id: "1.2", name: "வர்க்கமூலம் காணல்" }] },
      { id: "8-2", term: 1, name: "நிறை எண்களும் திசைகொண்ட எண்களும்", periods: 5, subUnits: [{ id: "2.1", name: "நிறை எண்களின் பெருக்கம், வகுத்தல்" }] },
      { id: "8-3", term: 1, name: "எண்கோலங்கள்", periods: 5, subUnits: [{ id: "3.1", name: "எண்கோலத்தின் பொது உறுப்பு" }] },
      { id: "8-4", term: 1, name: "பின்னங்களின் பெருக்கல்", periods: 6, subUnits: [{ id: "4.1", name: "பின்னத்தைப் பின்னத்தால் பெருக்குதல்" }] },
      { id: "8-5", term: 1, name: "பின்னங்களின் வகுத்தல்", periods: 6, subUnits: [{ id: "5.1", name: "பின்னத்தைப் பின்னத்தால் வகுத்தல்" }] },
      { id: "8-6", term: 1, name: "தசமங்கள்", periods: 7, subUnits: [{ id: "6.1", name: "தசம எண்களின் பெருக்கம், வகுத்தல்" }] },
      { id: "8-7", term: 2, name: "விகிதம்", periods: 6, subUnits: [{ id: "7.1", name: "விகிதத்திற்கேற்ப பங்கிடல்" }] },
      { id: "8-8", term: 2, name: "சதவீதம்", periods: 6, subUnits: [{ id: "8.1", name: "சதவீதக் கணிப்புகள்" }] },
      { id: "8-9", term: 2, name: "சுட்டிகள்", periods: 5, subUnits: [{ id: "9.1", name: "பெருக்கல் விதி" }] },
      { id: "8-10", term: 2, name: "சுற்றளவு", periods: 5, subUnits: [{ id: "10.1", name: "கூட்டுத் தளவுருக்களின் சுற்றளவு" }] },
      { id: "8-11", term: 2, name: "பரப்பளவு", periods: 6, subUnits: [{ id: "11.1", name: "முக்கோணியின் பரப்பளவு" }] },
      { id: "8-12", term: 3, name: "திணிவு", periods: 5, subUnits: [{ id: "12.1", name: "மெட்ரிக் தொன்" }] },
      { id: "8-13", term: 3, name: "கனவளவு & கொள்ளளவு", periods: 6, subUnits: [{ id: "13.1", name: "சதுரமுகி, கனவுரு" }] },
      { id: "8-14", term: 3, name: "அட்சர கணிதக் கோவைகள்", periods: 5, subUnits: [{ id: "14.1", name: "அடைப்புகளை நீக்குதல்" }] },
      { id: "8-15", term: 3, name: "காரணிகள்", periods: 6, subUnits: [{ id: "15.1", name: "பொதுக் காரணியைப் பிரித்தெடுத்தல்" }] },
      { id: "8-16", term: 3, name: "சமன்பாடுகள்", periods: 5, subUnits: [{ id: "16.1", name: "அடைப்புடன் கூடிய சமன்பாடுகள்" }] },
      { id: "8-17", term: 3, name: "ஆள்கூற்றுத் தளம்", periods: 9, subUnits: [{ id: "17.1", name: "தெக்காட்டின் தளத்தில் புள்ளிகளைக் குறித்தல்" }] },
      { id: "8-18", term: 3, name: "கோணங்கள்", periods: 5, subUnits: [{ id: "18.1", name: "நிரப்பு, மிகைநிரப்பு, குத்தெதிர்க்கோணங்கள்" }] },
      { id: "8-19", term: 3, name: "பல்கோணிகள்", periods: 6, subUnits: [{ id: "19.1", name: "முக்கோணி, நாற்பக்கல் அகக்கோணங்கள்" }] },
      { id: "8-20", term: 3, name: "திண்மங்கள்", periods: 6, subUnits: [{ id: "20.1", name: "ஒயிலரின் தொடர்பு (V-E+F=2)" }] },
      { id: "8-21", term: 3, name: "வட்டம்", periods: 5, subUnits: [{ id: "21.1", name: "நாண், வில், ஆரைச்சிறை" }] },
      { id: "8-22", term: 3, name: "சுழல் சமச்சீர்", periods: 5, subUnits: [{ id: "22.1", name: "சமச்சீர் வரிசை காணல்" }] },
      { id: "8-23", term: 3, name: "முக்கோணிகள் அமைத்தல்", periods: 6, subUnits: [{ id: "23.1", name: "பக்கங்கள் தரப்படின் அமைத்தல்" }] },
      { id: "8-24", term: 3, name: "தரவு வகைக்குறித்தல்", periods: 6, subUnits: [{ id: "24.1", name: "தண்டு இலை வரைபு" }] },
      { id: "8-25", term: 3, name: "மையநாட்ட அளவைகள்", periods: 4, subUnits: [{ id: "25.1", name: "இடை, இடையம், ஆகாரம்" }] }
    ]
  },
  {
    grade: "9",
    lessons: [
      { id: "9-1", term: 1, name: "விஞ்ஞானமுறை குறிப்பீடு", periods: 3, subUnits: [{ id: "1.1", name: "பெரிய எண்களைக் குறித்தல்" }, { id: "1.2", name: "0-1 இடைப்பட்ட எண்களைக் குறித்தல்" }] },
      { id: "9-2", term: 1, name: "மட்டந்தட்டல்", periods: 2, subUnits: [{ id: "2.1", name: "முழு எண்களையும் தசமங்களையும் மட்டந்தட்டல்" }] },
      { id: "9-3", term: 1, name: "இருமை எண் தொகுதி", periods: 3, subUnits: [{ id: "3.1", name: "அடி 10 இலிருந்து அடி 2 இற்கு மாற்றல்" }] },
      { id: "9-4", term: 1, name: "எண்கோலங்கள்", periods: 3, subUnits: [{ id: "4.1", name: "கூட்டல் விருத்தி அறிமுகம்" }] },
      { id: "9-5", term: 1, name: "பின்னங்கள்", periods: 5, subUnits: [{ id: "5.1", name: "பின்னச் சுருக்கல்கள் (BODMAS)" }] },
      { id: "9-6", term: 1, name: "விகிதசமன்", periods: 6, subUnits: [{ id: "6.1", name: "நேர்விகிதசமன்" }] },
      { id: "9-7", term: 1, name: "சதவீதம்", periods: 6, subUnits: [{ id: "7.1", name: "இலாப நட்டம், தரகு" }] },
      { id: "9-8", term: 1, name: "சுட்டிகள்", periods: 3, subUnits: [{ id: "8.1", name: "சுட்டி விதிகள் 1, 2" }] },
      { id: "9-9", term: 1, name: "வட்டம்", periods: 5, subUnits: [{ id: "9.1", name: "வட்டத்தின் பரிதி" }] },
      { id: "9-10", term: 2, name: "பரப்பளவு", periods: 5, subUnits: [{ id: "10.1", name: "இணைகரம், சரிவகம்" }, { id: "10.2", name: "வட்டத்தின் பரப்பளவு" }] },
      { id: "9-11", term: 2, name: "அளவிடைப் படங்கள்", periods: 8, subUnits: [{ id: "11.1", name: "திசைகோள் அறிமுகம்" }] },
      { id: "9-12", term: 2, name: "அட்சர கணிதக் கோவைகள்", periods: 5, subUnits: [{ id: "12.1", name: "ஈருறுப்புக் கோவைகளின் பெருக்கம்" }] },
      { id: "9-13", term: 2, name: "காரணிகள்", periods: 5, subUnits: [{ id: "13.1", name: "மூவுறுப்பு இருபடிக்கோவை காரணிகள்" }] },
      { id: "9-14", term: 2, name: "அட்சர கணிதப் பின்னங்கள்", periods: 3, subUnits: [{ id: "14.1", name: "பின்னக் கூட்டல், கழித்தல்" }] },
      { id: "9-15", term: 2, name: "சமன்பாடுகள்", periods: 6, subUnits: [{ id: "15.1", name: "ஒருங்கமை சமன்பாடுகள்" }] },
      { id: "9-16", term: 3, name: "வரைபுகள்", periods: 4, subUnits: [{ id: "16.1", name: "y=mx+c வரைபுகள்" }] },
      { id: "9-17", term: 3, name: "தேற்றங்கள்", periods: 14, subUnits: [{ id: "17.1", name: "முக்கோணித் தேற்றங்கள்" }, { id: "17.2", name: "நாற்பக்கல் தேற்றங்கள்" }] },
      { id: "9-18", term: 3, name: "பைதகரசின் தொடர்பு", periods: 4, subUnits: [{ id: "18.1", name: "செங்கோண முக்கோணி" }] },
      { id: "9-19", term: 3, name: "ஒழுக்கு & அமைப்புகள்", periods: 9, subUnits: [{ id: "19.1", name: "அடிப்படை ஒழுக்குகள்" }] },
      { id: "9-20", term: 3, name: "நிகழ்தகவு", periods: 9, subUnits: [{ id: "20.1", name: "மாதிரி வெளி" }] },
      { id: "9-21", term: 3, name: "தொடைகள்", periods: 7, subUnits: [{ id: "21.1", name: "தொடைகளின் வகைகள்" }, { id: "21.2", name: "வென் வரிப்படம்" }] }
    ]
  },
  {
    grade: "10",
    lessons: [
      { id: "10-1", term: 1, name: "வர்க்கமூலம்", periods: 4, subUnits: [{ id: "1.1", name: "அண்ணளவாக்க முறை" }, { id: "1.2", name: "வகுத்தல் முறை" }] },
      { id: "10-2", term: 1, name: "பின்னங்கள்", periods: 4, subUnits: [{ id: "2.1", name: "பின்னங்கள் தொடர்பான பிரசினங்கள்" }] },
      { id: "10-3", term: 1, name: "சுற்றளவு", periods: 4, subUnits: [{ id: "3.1", name: "ஆரைச்சிறையின் வில்ளின் நீளம்" }, { id: "3.2", name: "கூட்டுத் தளவுருக்களின் சுற்றளவு" }] },
      { id: "10-4", term: 1, name: "பரப்பளவு", periods: 4, subUnits: [{ id: "4.1", name: "ஆரைச்சிறையின் பரப்பளவு" }] },
      { id: "10-5", term: 1, name: "அட்சரகணிதக் கோவைகள்", periods: 4, subUnits: [{ id: "5.1", name: "ஈருறுப்புக் கோவைகளின் பெருக்கம்" }, { id: "5.2", name: "ஈருறுப்புக் கோவையின் வர்க்கம்" }] },
      { id: "10-6", term: 1, name: "காரணிகள்", periods: 4, subUnits: [{ id: "6.1", name: "வர்க்கங்களின் வித்தியாசம்" }, { id: "6.2", name: "இருபடி மூவுறுப்புக் கோவைகள்" }] },
      { id: "10-7", term: 2, name: "நேர்மாறு விகிதசமன்", periods: 4, subUnits: [{ id: "7.1", name: "வேலையும் நேரமும் தொடர்பான கணக்குகள்" }] },
      { id: "10-8", term: 2, name: "தொடைகள்", periods: 8, subUnits: [{ id: "8.1", name: "தொடை குறிப்பீடு" }, { id: "8.2", name: "வென் வரிப்படம் (இரு தொடைகள்)" }] },
      { id: "10-9", term: 2, name: "மடக்கைகள்", periods: 6, subUnits: [{ id: "9.1", name: "சுட்டி - மடக்கை தொடர்பு" }, { id: "9.2", name: "மடக்கை விதிகள்" }, { id: "9.3", name: "மடக்கை அட்டவணைப் பயன்பாடு" }] },
      { id: "10-10", term: 2, name: "வரைபுகள்", periods: 6, subUnits: [{ id: "10.1", name: "y = mx + c வடிவ வரைபுகள்" }, { id: "10.2", name: "y = ax^2 + b வடிவ வரைபுகள்" }] },
      { id: "10-11", term: 2, name: "ஒருங்கமை சமன்பாடுகள்", periods: 3, subUnits: [{ id: "11.1", name: "ஒருங்கமை சமன்பாடுகளைத் தீர்த்தல்" }] },
      { id: "10-12", term: 2, name: "நாற்பக்கல்கள்", periods: 13, subUnits: [{ id: "12.1", name: "இணைகரத் தேற்றங்கள்" }, { id: "12.2", name: "சரிவகம் மற்றும் ஏனைய நாற்பக்கல்கள்" }] },
      { id: "10-13", term: 3, name: "கூட்டல் விருத்தி", periods: 6, subUnits: [{ id: "13.1", name: "n ஆம் உறுப்பு" }, { id: "13.2", name: "முதல் n உறுப்புகளின் கூட்டுத்தொகை" }] },
      { id: "10-14", term: 3, name: "அமைப்புகள்", periods: 7, subUnits: [{ id: "14.1", name: "முக்கோணிகள் அமைத்தல்" }, { id: "14.2", name: "ஒழுக்குகள்" }] },
      { id: "10-15", term: 3, name: "வட்டத் தேற்றங்கள்", periods: 6, subUnits: [{ id: "15.1", name: "மையக்கோணமும் பரிதிக்கோணமும்" }, { id: "15.2", name: "ஒரே துண்டக் கோணங்கள்" }] },
      { id: "10-16", term: 3, name: "நிதி கணிதம்", periods: 7, subUnits: [{ id: "16.1", name: "வரி (Taxes)" }, { id: "16.2", name: "எளிய வட்டி" }] },
      { id: "10-17", term: 3, name: "தரவு கையாளுதல்", periods: 12, subUnits: [{ id: "17.1", name: "மீடிறன் பரம்பல்" }, { id: "17.2", name: "இடை, இடையம், ஆகாரம்" }] }
    ]
  },
  {
    grade: "11",
    lessons: [
      { id: "11-1", term: 1, name: "மெய்யெண்கள் & சேடுகள்", periods: 8, subUnits: [{ id: "1.1", name: "விகிதமுறா எண்கள்" }, { id: "1.2", name: "சேடுகள் அறிமுகமும் சுருக்கமும்" }] },
      { id: "11-2", term: 1, name: "சுட்டிகளும் மடக்கைகளும்", periods: 9, subUnits: [{ id: "2.1", name: "மடக்கை விதிகள்" }, { id: "2.2", name: "0-1 இடைப்பட்ட எண்களின் மடக்கை" }, { id: "2.3", name: "மடக்கை அட்டவணை மூலம் சுருக்கல்" }] },
      { id: "11-3", term: 1, name: "மேற்பரப்பளவு", periods: 5, subUnits: [{ id: "3.1", name: "கூம்பின் மேற்பரப்பளவு" }, { id: "3.2", name: "கோளத்தின் மேற்பரப்பளவு" }, { id: "3.3", name: "செங்கூம்பகத்தின் மேற்பரப்பளவு" }] },
      { id: "11-4", term: 1, name: "கனவளவு", periods: 5, subUnits: [{ id: "4.1", name: "கூம்பு, கோளம், கூம்பகம் ஆகியவற்றின் கனவளவு" }] },
      { id: "11-5", term: 2, name: "ஈருறுப்புக் கோவைகளின் கனம்", periods: 4, subUnits: [{ id: "5.1", name: "(a+b)^3 மற்றும் (a-b)^3 விரிவாக்கம்" }] },
      { id: "11-6", term: 2, name: "அட்சரகணிதப் பின்னங்கள்", periods: 4, subUnits: [{ id: "6.1", name: "பின்னப் பெருக்கல் மற்றும் வகுத்தல்" }] },
      { id: "11-7", term: 2, name: "சமன்பாடுகள்", periods: 10, subUnits: [{ id: "7.1", name: "குணகங்கள் சமனற்ற ஒருங்கமை சமன்பாடுகள்" }, { id: "7.2", name: "இருபடிச் சமன்பாடுகள் (வர்க்க பூர்த்தி & சூத்திரம்)" }] },
      { id: "11-8", term: 2, name: "சமனிலிகள்", periods: 6, subUnits: [{ id: "8.1", name: "ax+b <= cx+d வகை சமனிலிகள்" }, { id: "8.2", name: "எண்கோட்டில் தீர்வை வகைகுறித்தல்" }] },
      { id: "11-9", term: 2, name: "வரைபுகள்", periods: 12, subUnits: [{ id: "9.1", name: "வரைபு மூலம் ஒருங்கமை சமன்பாடு தீர்த்தல்" }, { id: "9.2", name: "y = a(x+b)^2 + c வடிவ வரைபுகள்" }] },
      { id: "11-10", term: 2, name: "தாயங்கள் (Matrices)", periods: 8, subUnits: [{ id: "10.1", name: "தாயங்களின் கூட்டல், கழித்தல்" }, { id: "10.2", name: "தாயங்களின் பெருக்கல்" }] },
      { id: "11-11", term: 3, name: "பெருக்கல் விருத்தி", periods: 7, subUnits: [{ id: "11.1", name: "n ஆம் உறுப்பு (Tn)" }, { id: "11.2", name: "n உறுப்புகளின் கூட்டுத்தொகை (Sn)" }] },
      { id: "11-12", term: 3, name: "நிதி கணிதம்", periods: 9, subUnits: [{ id: "12.1", name: "குறைந்து செல்லும் மீதிக்கு வட்டி" }, { id: "12.2", name: "கூட்டு வட்டி" }, { id: "12.3", name: "பங்குச் சந்தை (Stock Market)" }] },
      { id: "11-13", term: 3, name: "திரிகோண கணிதம்", periods: 12, subUnits: [{ id: "13.1", name: "சைன், கோசைன், தான்சன் விகிதங்கள்" }, { id: "13.2", name: "ஏற்றக்கோணம் மற்றும் இறக்கக்கோணம்" }] },
      { id: "11-14", term: 3, name: "கேத்திர கணிதத் தேற்றங்கள்", periods: 25, subUnits: [{ id: "14.1", name: "சமாந்தரக் கோடுகளும் பரப்பளவும்" }, { id: "14.2", name: "நடுப்புள்ளித் தேற்றம்" }, { id: "14.3", name: "வட்ட நாற்பக்கல் தேற்றங்கள்" }, { id: "14.4", name: "வட்டத் தொடலிகள்" }] },
      { id: "11-15", term: 3, name: "அமைப்புகள்", periods: 5, subUnits: [{ id: "15.1", name: "வட்டத்திற்குத் தொடலி வரைதல்" }, { id: "15.2", name: "முக்கோணத்தின் சுற்றுவட்டம், உள்வட்டம்" }] },
      { id: "11-16", term: 3, name: "புள்ளிவிபரம் & நிகழ்தகவு", periods: 20, subUnits: [{ id: "16.1", name: "வலையுரு வரையம் (Histogram)" }, { id: "16.2", name: "திரள் மீடிறன் வளைவு & காலணைகள்" }, { id: "16.3", name: "சார் நிகழ்ச்சிகளின் நிகழ்தகவு" }] }
    ]
  }
];

export const TEXTBOOKS: TextbookLink[] = [
  { grade: "6", parts: [
    { title: "கணிதம் I", url: "http://www.edupub.gov.lk/Administrator/Tamil/6/maths%20g-6%20p-I%20T/maths%20g-6%20p-I%20T.pdf" },
    { title: "கணிதம் II", url: "http://www.edupub.gov.lk/Administrator/Tamil/6/maths%20g-6%20p-II%20T/maths%20g-6%20p-II%20T.pdf" }
  ]},
  { grade: "7", parts: [
    { title: "கணிதம் I", url: "http://www.edupub.gov.lk/Administrator/Tamil/7/maths%20G-7%20P-I%20T/Maths%20G%207%20Part1.pdf" },
    { title: "கணிதம் II", url: "http://www.edupub.gov.lk/Administrator/Tamil/7/maths%20P-II%20T/maths%20P-II%20T.pdf" }
  ]},
  { grade: "8", parts: [
    { title: "கணிதம் I", url: "http://www.edupub.gov.lk/Administrator/Tamil/8/maths%20P-I%20TG-8/maths%20G-8%20I%20T.pdf" },
    { title: "கணிதம் II", url: "http://www.edupub.gov.lk/Administrator/Tamil/8/maths%20G-8%20P-II%20T/maths%20G-8%20P-II%20T.pdf" }
  ]},
  { grade: "9", parts: [
    { title: "கணிதம் I", url: "http://www.edupub.gov.lk/Administrator/Tamil/9/maths%20g9%20p-I%20S/maths%20g-9%20P-I%20T.pdf" },
    { title: "கணிதம் II", url: "http://www.edupub.gov.lk/Administrator/Tamil/9/maths%20G-9%20P-II%20T/m%20G9%20PII%20T.pdf" }
  ]},
  { grade: "10", parts: [
    { title: "கணிதம் I", url: "http://www.edupub.gov.lk/Administrator/Tamil/10/maths%20g-10%20p-I%20T/Maths%20Gr%2010%20P%20I%20(T).pdf" },
    { title: "கணிதம் II", url: "http://www.edupub.gov.lk/Administrator/Tamil/10/maths%20g-10%20p-II%20T/maths%20g-10%20p-II%20T.pdf" }
  ]},
  { grade: "11", parts: [
    { title: "கணிதம் I", url: "http://www.edupub.gov.lk/Administrator/Tamil/11/maths%20g-11%20p-I%20T/maths%20G-11%20P-I%20T.pdf" },
    { title: "கணிதம் II", url: "http://www.edupub.gov.lk/Administrator/Tamil/11/mat%20g-11%20p-II%20T/maths%20g-11%20p-II%20T.pdf" }
  ]}
];

export const NIE_GUIDES: NIELink[] = [
  { grade: "6", url: "https://nie.lk/pdffiles/tg/t6tim109.pdf" },
  { grade: "7", url: "https://nie.lk/pdffiles/tg/t7tim168.pdf" },
  { grade: "8", url: "https://nie.lk/pdffiles/tg/tGr8_TG%20Maths.pdf" },
  { grade: "9", url: "https://nie.lk/pdffiles/tg/tGr09TG%20Maths.pdf" },
  { grade: "10", url: "https://nie.lk/pdffiles/tg/t10tim109.pdf" },
  { grade: "11", url: "https://nie.lk/pdffiles/tg/t11tim168.pdf" }
];
