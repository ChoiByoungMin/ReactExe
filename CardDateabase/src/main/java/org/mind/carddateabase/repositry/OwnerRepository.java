package org.mind.carddateabase.repositry;

import org.mind.carddateabase.domain.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerRepository extends JpaRepository<Owner, Long> {
}
