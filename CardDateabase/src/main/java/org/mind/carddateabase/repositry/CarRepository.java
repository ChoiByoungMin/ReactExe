package org.mind.carddateabase.repositry;

import org.mind.carddateabase.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

// 현재 Repository의 api 주소를 변경할 수 있다.
//@RepositoryRestController(path = "aaa")
public interface CarRepository extends JpaRepository<Car, Long> {
}
