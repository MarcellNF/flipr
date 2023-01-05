package com.github.moinmarcell.backend.security;

import com.github.moinmarcell.backend.model.FliprUser;
import com.github.moinmarcell.backend.model.MongoUserDTO;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.Principal;

@RestController
@RequestMapping("/api/users")
public class MongoUserController {

    MongoUserService mongoUserService;

    public MongoUserController(MongoUserService mongoUserService) {
        this.mongoUserService = mongoUserService;
    }

    @GetMapping("/me")
    public String helloMe(Principal principal){
        if(principal != null){
            return principal.getName();
        }
        return "anonymousUser";
    }

    @PostMapping("/login")
    public String login(){
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @PostMapping("/logout")
    public String logout(HttpSession httpSession){
        httpSession.invalidate();
        SecurityContextHolder.clearContext();
        return "anonymousUser";
    }

    @PostMapping("/register")
    public FliprUser saveUser(@RequestBody MongoUserDTO fliprUser){
        return mongoUserService.saveMongoUser(fliprUser);
    }
}
