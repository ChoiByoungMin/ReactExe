package org.mind.carddateabase.service;

import lombok.RequiredArgsConstructor;
import org.mind.carddateabase.domain.User;
import org.mind.carddateabase.repositry.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User.UserBuilder;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    // AuthenticationManager의 인증과정에서 호출되어 진다.
    // 이곳에서는 테이블의 사용자가 있는지를 확인하고,
    // 사용자id, password, role을 넣어줘야 한다.
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);

        UserBuilder builder = null;
        // User테이블에 username이 존재한다.
        if(user.isPresent()) {
            // username, password, role를 builder에 전달
            User currentUser = user.get();
            builder = org.springframework.security.core.userdetails.User.withUsername(username);
            builder.password(currentUser.getPassword());
            builder.roles(currentUser.getRole());
        }else{
            throw new UsernameNotFoundException("User not found : " + username);
        }
        return builder.build();
    }
}
