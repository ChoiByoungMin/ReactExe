package org.mind.carddateabase.repositry;

import org.mind.carddateabase.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}
