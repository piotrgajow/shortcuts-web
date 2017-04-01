--liquibase formatted sql

--changeset piotrgajow:createTripPointTable
CREATE TABLE trip_point (
    trip_point_id BIGINT NOT NULL AUTO_INCREMENT,
    trip_id BIGINT NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    time_instance DATETIME NOT NULL,

    PRIMARY KEY (trip_point_id),
    CONSTRAINT FK_trip_point_trip_id FOREIGN KEy (trip_id) REFERENCES trip (trip_id)
);
