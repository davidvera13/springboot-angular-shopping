package com.spring.shop.app.config;

import com.spring.shop.app.entity.Product;
import com.spring.shop.app.entity.ProductCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@SuppressWarnings("rawtypes")
@Configuration
public class AppRestConfig implements RepositoryRestConfigurer {

    private final EntityManager entityManager;

    @Autowired
    public AppRestConfig(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

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

        // call an internal helper method to expose Id
        exposeIds(config);
    }

    // helper method
    private void exposeIds(RepositoryRestConfiguration configuration) {
        // expose entityId
        // get a list of all entity classes from the entity manager
        Set<EntityType<?>> entityTypes = entityManager.getMetamodel().getEntities();

        // create an array of the entity types
        List<Class> entityClasses = new ArrayList<>();
        // get the entity type for the entities
        for (EntityType entityType: entityTypes) {
            entityClasses.add(entityType.getJavaType());
        }
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        configuration.exposeIdsFor(domainTypes);
    }
}
