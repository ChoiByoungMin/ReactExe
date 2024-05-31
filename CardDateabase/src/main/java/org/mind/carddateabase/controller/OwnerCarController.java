package org.mind.carddateabase.controller;

import lombok.RequiredArgsConstructor;
import org.mind.carddateabase.domain.Car;
import org.mind.carddateabase.domain.Owner;
import org.mind.carddateabase.repositry.CarRepository;
import org.mind.carddateabase.repositry.OwnerRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class OwnerCarController {

    private final OwnerRepository ownerRepository;
    private final CarRepository carRepository;

    @RequestMapping("/cars")
    public List<Car> getAllCars(){
        return carRepository.findAll();
    }

    @RequestMapping("/owners")
    public List<Owner> getAllOwners(){
        return ownerRepository.findAll();
    }
}
