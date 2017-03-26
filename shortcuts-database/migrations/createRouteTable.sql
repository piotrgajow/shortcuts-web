--liquibase formatted sql

--changeset piotrgajow:createRouteTable
CREATE TABLE route (
    route_id INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(255) NOT NULL,
    creation_date DATETIME NOT NULL DEFAULT NOW(),
    status INT NOT NULL DEFAULT 1,

    PRIMARY KEY (route_id)
);
