package com.spring.shop.app.dao;

import com.spring.shop.app.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

// @CrossOrigin({"http://localhost:4200", "http://localhost:4300"})
@CrossOrigin
public interface ProductRepository extends JpaRepository<Product, Long> {

}
