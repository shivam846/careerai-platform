
// package com.careerai.intelligent_career_platform.controller;

// import com.careerai.intelligent_career_platform.dto.*;
// import com.careerai.intelligent_career_platform.model.User;
// import com.careerai.intelligent_career_platform.repo.UserRepo;
// import com.careerai.intelligent_career_platform.service.EmailService;

// import org.springframework.web.bind.annotation.*;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCrypt;

// @RestController
// @RequestMapping("/api/auth")
// @CrossOrigin
// public class AuthController {

//     private final UserRepo userRepo;

//     @Autowired
//     private EmailService emailService;

//     public AuthController(UserRepo userRepo) {
//         this.userRepo = userRepo;
//     }

//     // ✅ REGISTER + OTP SEND
//     @PostMapping("/register")
//     public String register(@RequestBody RegisterRequest req) {

//         if (userRepo.existsByEmail(req.email())) {
//             return "Email already registered";
//         }

//         // 🔥 Generate OTP (6 digit)
//         String otp = String.valueOf((int)(Math.random() * 900000) + 100000);

//         String hashed = BCrypt.hashpw(req.password(), BCrypt.gensalt());

    
//         User user = new User();

//         user.setName(req.name());
//         user.setEmail(req.email());
//         user.setPasswordHash(hashed);
//         user.setUserType(req.userType());

//         // 🔥 OTP + verification
//         user.setOtp(otp);
//         user.setVerified(false);

//         userRepo.save(user);

//         // 🔥 Send email
//         emailService.sendOtp(req.email(), otp);

//         return "OTP sent to email";
//     }

//     // ✅ VERIFY OTP
//     @PostMapping("/verify")
//     public String verify(@RequestParam String email, @RequestParam String otp) {

//         User user = userRepo.findByEmail(email);

//         if (user == null) return "User not found";

//         if (user.getOtp() != null && user.getOtp().equals(otp)) {
//             user.setVerified(true);
//             user.setOtp(null);
//             userRepo.save(user);
//             return "Email verified successfully";
//         }

//         return "Invalid OTP";
//     }

//     // ✅ LOGIN (only if verified)
//     @PostMapping("/login")
//     public LoginResponse login(@RequestBody LoginRequest req) {

//         User u = userRepo.findByEmail(req.email());

//         if (u == null || !BCrypt.checkpw(req.password(), u.getPasswordHash())) {
//             throw new RuntimeException("Invalid email or password");
//         }

//         // 🔥 VERY IMPORTANT
//         if (!u.isVerified()) {
//             throw new RuntimeException("Please verify your email first");
//         }

//         return new LoginResponse(
//                 u.getId(),
//                 u.getName(),
//                 u.getEmail(),
//                 u.getUserType()
//         );
//     }


//     //forgot password

//     @PostMapping("/forgot-password")
//     public String forgotPassword(@RequestParam String email) {

//         User user = userRepo.findByEmail(email);

//         if (user == null) return "User not found";

//         // 🔥 OTP generate
//         String otp = String.valueOf((int)(Math.random() * 900000) + 100000);

//         user.setOtp(otp);
//         userRepo.save(user);

//         // 🔥 Send email
//         emailService.sendOtp(email, otp);

//         return "OTP sent for password reset";
//     }


//     //reset after user found
//     @PostMapping("/reset-password")
//     public String resetPassword(
//          @RequestParam String email,
//          @RequestParam String newPassword
//     ) {
//         User user = userRepo.findByEmail(email);

//          if (user == null) return "User not found";

//         String hashed = BCrypt.hashpw(newPassword, BCrypt.gensalt());

//         user.setPasswordHash(hashed);
//         user.setOtp(null);

//         userRepo.save(user);

//         return "Password updated successfully";
//     }
// }

package com.careerai.intelligent_career_platform.controller;

import com.careerai.intelligent_career_platform.dto.*;
import com.careerai.intelligent_career_platform.model.User;
import com.careerai.intelligent_career_platform.repo.UserRepo;
import com.careerai.intelligent_career_platform.service.EmailService;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final UserRepo userRepo;

    @Autowired
    private EmailService emailService;

    public AuthController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    // ==========================
    // ✅ REGISTER + OTP SEND
    // ==========================
    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest req) {

        if (userRepo.existsByEmail(req.email())) {
            return "Email already registered";
        }

        String otp = String.valueOf((int)(Math.random() * 900000) + 100000);

        String hashed = BCrypt.hashpw(req.password(), BCrypt.gensalt());

        User user = new User();
        user.setName(req.name());
        user.setEmail(req.email());
        user.setPasswordHash(hashed);
        user.setUserType(req.userType());

        user.setOtp(otp);
        user.setVerified(false);

        userRepo.save(user);

        emailService.sendOtp(req.email(), otp);

        return "OTP sent to email";
    }

    // ==========================
    // ✅ VERIFY EMAIL OTP
    // ==========================
    @PostMapping("/verify")
    public String verify(@RequestParam String email, @RequestParam String otp) {

        User user = userRepo.findByEmail(email);

        if (user == null) return "User not found";

        if (user.getOtp() != null && user.getOtp().equals(otp)) {
            user.setVerified(true);
            user.setOtp(null);
            userRepo.save(user);
            return "Email verified successfully";
        }

        return "Invalid OTP";
    }

    // ==========================
    // ✅ LOGIN (ONLY VERIFIED)
    // ==========================
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest req) {

        User u = userRepo.findByEmail(req.email());

        if (u == null || !BCrypt.checkpw(req.password(), u.getPasswordHash())) {
            throw new RuntimeException("Invalid email or password");
        }

        if (!u.isVerified()) {
            throw new RuntimeException("Please verify your email first");
        }

        return new LoginResponse(
                u.getId(),
                u.getName(),
                u.getEmail(),
                u.getUserType()
        );
    }

    // ==========================
    // 🔐 FORGOT PASSWORD (SEND OTP)
    // ==========================
    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestParam String email) {

        User user = userRepo.findByEmail(email);

        if (user == null) return "User not found";

        String otp = String.valueOf((int)(Math.random() * 900000) + 100000);

        user.setOtp(otp);
        userRepo.save(user);

        emailService.sendOtp(email, otp);

        return "OTP sent for password reset";
    }

    // ==========================
    // 🔐 VERIFY RESET OTP
    // ==========================
    @PostMapping("/verify-reset-otp")
    public String verifyResetOtp(@RequestParam String email, @RequestParam String otp) {

        User user = userRepo.findByEmail(email);

        if (user == null) return "User not found";

        if (user.getOtp() != null && user.getOtp().equals(otp)) {
            return "OTP verified";
        }

        return "Invalid OTP";
    }

    // ==========================
    // 🔐 RESET PASSWORD (SECURE)
    // ==========================
    @PostMapping("/reset-password")
    public String resetPassword(
            @RequestParam String email,
            @RequestParam String otp,
            @RequestParam String newPassword
    ) {
        User user = userRepo.findByEmail(email);

        if (user == null) return "User not found";

        if (user.getOtp() == null || !user.getOtp().equals(otp)) {
            return "Invalid OTP";
        }

        String hashed = BCrypt.hashpw(newPassword, BCrypt.gensalt());

        user.setPasswordHash(hashed);
        user.setOtp(null);

        userRepo.save(user);

        return "Password updated successfully";
    }
}