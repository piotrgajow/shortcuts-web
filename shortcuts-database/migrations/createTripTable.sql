--liquibase formatted sql

--changeset piotrgajow:createTripTable
CREATE TABLE trip (
    trip_id BIGINT NOT NULL AUTO_INCREMENT,
    route_id INT NOT NULL,
    start_time DATETIME,
    end_time DATETIME,

    PRIMARY KEY (trip_id),
    CONSTRAINT FK_trip_route_id FOREIGN KEY (route_id) REFERENCES route (route_id)
);
