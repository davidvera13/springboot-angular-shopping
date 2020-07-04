package com.spring.shop.app.config;

import com.spring.shop.app.entity.Product;
import com.spring.shop.app.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class AppRestConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        // methods that are not allowed
        HttpMethod[] unsupportedActions = {
             HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE
        };

        // disable methods
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure(
                        ((metdata, httpMethods) -> httpMethods.disable(unsupportedActions))
                )
                .withCollectionExposure(
                        ((metdata, httpMethods) -> httpMethods.disable(unsupportedActions))
                );

        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure(
                        ((metdata, httpMethods) -> httpMethods.disable(unsupportedActions))
                )
                .withCollectionExposure(
                        ((metdata, httpMethods) -> httpMethods.disable(unsupportedActions))
                );
    }
}
