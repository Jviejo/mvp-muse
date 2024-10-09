
const urlBase = "https://8rwd6lr689.execute-api.us-east-1.amazonaws.com";
const version = "Version_0";

const paths: Record<string, string> = {
  signUp: "main_menu/sign_up",
  logIn: "main_menu/log_in",
  forgetPassword: "main_menu/forget_password",
  logOut: "lobby/log_out",
  changePassword: "lobby/change_password",
  pingTTL: "lobby/ping_ttl",
  confirmTransationalEmails: "lobby/confirm_transational_emails",
  updateUserData: "lobby/update_user_data",
  returnipCountryCode: "main_menu/return_ip_countrycode",
  saveJson: "lobby/save_exercise_json",
  create_class: "lobby/create_exercise",
  showConnections: "lobby/show_connections",
  showExercises: "lobby/show_exercises",
  shoStudents: "lobby/show_students",
  showInstitutes: "lobby/show_institutes",
  showInstituteMembers: "lobby/show_institute_members",
  shoLocations: "lobby/show_location",
  showTeachers: "lobby/show_teachers",
  showTeacherExercises: "lobby/show_teacher_exercises",
  deleteExercise: "lobby/delete_exercise",
  sendPreregistEmailAll: "lobby/send_preregistration_email_all",
  sendPreregistEmailOne: "lobby/send_preregistration_email_one",
  sendNewUsers: "lobby/add_new_users",
  removeUser: "lobby/remove_user",
  readJsonFile: "lobby/read_json_file",
  guestSignup: "main_menu/Guest_joinned",
  updateGuest: "lobby/update_guest_data",
  getGuests: "lobby/show_guests"
};

const urls: Record<string, string> = Object.fromEntries(
  Object.entries(paths).map(([key, path]) => [key, `${urlBase}/${version}/${path}`])
);

export default urls;