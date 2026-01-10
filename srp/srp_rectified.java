package SOLID;

import java.io.File;
//bad code
class UserProfileManager {
    void getProfile(){}
    void updateProfile(){}
    void uploadProfilePicture(){}
    void deleteAccount(){}
}

//corrected code
class UserProfileService {
    UserProfile get(int id) { return null; }
    void update(int id, UserProfile data) {}
}

class UserPictureService {
    void upload(int id, File file) {}
}

class UserAccountManager {
    void delete(int id) {}
}

public class srp_fail {

}

