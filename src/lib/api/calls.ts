"use server"
import urls from './urls';
import jwt from 'jsonwebtoken';

// este fichero contiene las llamadas a la API

async function baseLambdaFetch(lambdaName: string, params: Record<string, unknown>) {
  
  params.api = process.env.API_KEY;

  try {
    const response = await fetch(urls[lambdaName] as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error in ${lambdaName}:`, error);
    throw new Error(`999`);
  }
}

export async function addBatchOfUsers(accessKey: string, emails: [string, number][]) {
  return await baseLambdaFetch('addBatchOfUsers', { accesskey: accessKey, Emails: emails });
}

export async function changePassword(accessKey: string, email: string, actualPassword: string, newPassword: string) {
  return await baseLambdaFetch('changePassword', { accesskey: accessKey, Email: email, actualPassword, newPassword });
}

export async function confirmTransactionalEmails(accessKey: string, email: string) {
  return await baseLambdaFetch('confirmTransationalEmails', { accesskey: accessKey, email });
}

export async function createExercise(email: string, trackID: string, originalBPM: number, bpmr: number, timeInPercentage: number, timesCompleted: number) {
  return await baseLambdaFetch('create_class', { Email: email, trackID, originalBPM, bpmr, time_in_percentage: timeInPercentage, times_completed: timesCompleted });
}

export async function deleteTeacherExercise(accessKey: string, email: string) {
  return await baseLambdaFetch('deleteExercise', { accesskey: accessKey, Email: email });
}

export async function forgetPassword(accessKey: string, email: string) {
  return await baseLambdaFetch('forgetPassword', { accesskey: accessKey, email });
}

export async function login(accessKey: string, email: string, password: string, ip: string, countrycode: string, platform: string) {
    try {
      const datosLogin = await baseLambdaFetch('logIn', { accesskey: accessKey, email, password, ip, countrycode, Platform: platform });
      
      const secret = process.env.SECRET;
      
      if (!secret) {
        throw new Error('SECRET environment variable is not set');
      }

      const token = jwt.sign(datosLogin, secret, { expiresIn: '1h' });
      datosLogin.token = token;
      
      return JSON.parse(datosLogin);

    } catch (error) {
      console.error(`Error in login:`, error);
      throw error;
    }
}

export async function logout(accessKey: string, email: string) {
  return await baseLambdaFetch('logOut', { accesskey: accessKey, email });
}

export async function pingTTL(isAGuest: boolean, guestID: string, email: string) {
  return await baseLambdaFetch('pingTTL', { IsAGuest: isAGuest, GuestID: guestID, Email: email });
}

export async function removeUser(accessKey: string, email: string) {
  return await baseLambdaFetch('removeUser', { accesskey: accessKey, Email: email });
}

export async function returnIPCountryCode(ip: string) {
  return await baseLambdaFetch('returnipCountryCode', { Ip: ip });
}

export async function returnJson(ip: string, email: string, platformType: string, jsonToExerciseName: string, exerciseNumber: number, jsonToGameStatusName: string, teacher: string) {
  return await baseLambdaFetch('readJsonFile', { 
    Ip: ip, 
    Email: email, 
    Platform_type: platformType, 
    Json_to_exercise_name: jsonToExerciseName, 
    Exercise_number: exerciseNumber, 
    Json_to_gmae_status_name: jsonToGameStatusName, 
    Teacher: teacher 
  });
}

export async function sendPreregistrationEmail(accessKey: string, email: string) {
  return await baseLambdaFetch('sendPreregistEmailOne', { accesskey: accessKey, Email: email });
}

export async function sendPreregistrationEmailAll(accessKey: string, email: string, accesscode: string) {
  return await baseLambdaFetch('sendPreregistEmailAll', { accesskey: accessKey, Email: email, accesscode });
}

export async function showInstituteMembers(accessKey: string) {
  return await baseLambdaFetch('showInstituteMembers', { accesskey: accessKey });
}

export async function showInstituteStudents(accessKey: string, email: string) {
  return await baseLambdaFetch('shoStudents', { accesskey: accessKey, email });
}

export async function showInstitutes(table: string) {
  return await baseLambdaFetch('showInstitutes', { table });
}

export async function showLocation() {
  return await baseLambdaFetch('shoLocations', {});
}

export async function showTeacherExercises(email: string) {
  return await baseLambdaFetch('showTeacherExercises', { Email: email });
}

export async function showUserConnections(email: string) {
  return await baseLambdaFetch('showConnections', { email });
}

export async function showUserExercises(email: string, exercise: string) {
  return await baseLambdaFetch('showExercises', { Email: email, Exercise: exercise });
}

export async function signup(accessKey: string, email: string, password: string, username: string, ip: string, countrycode: string, platform: string, transactionalEmail: boolean, marketingEmail: boolean) {
  return await baseLambdaFetch('signUp', { 
    accesskey: accessKey, 
    email, 
    password, 
    username, 
    ip, 
    countrycode, 
    Platform: platform, 
    transational_email: transactionalEmail, 
    marketing_email: marketingEmail 
  });
}

export async function updateUserData(accessKey: string, email: string, marketingEmail: boolean) {
  return await baseLambdaFetch('updateUserData', { accesskey: accessKey, Email: email, Marketing_email: marketingEmail });
}

export async function uploadExerciseResult(email: string, jsonToExercise: string, jsonToExerciseName: string, platformType: string, exerciseNumber: number, trackID: string, accuracyResult: number, success: boolean, teacher: string) {
  return await baseLambdaFetch('saveJson', { 
    Email: email, 
    json_to_exercise: jsonToExercise, 
    json_to_exercise_name: jsonToExerciseName, 
    platform_type: platformType, 
    exercise_number: exerciseNumber, 
    TrackID: trackID, 
    accuracy_result: accuracyResult, 
    Success: success, 
    teacher 
  });
}