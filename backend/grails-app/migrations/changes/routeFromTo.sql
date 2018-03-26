-- liquibase formatted sql

-- changeset piotrgajow:routeFromTo
ALTER TABLE route
    ADD COLUMN location_from VARCHAR(255) NOT NULL AFTER route_id,
    ADD COLUMN location_to VARCHAR(255) NOT NULL AFTER location_from,
    ADD UNIQUE KEY U_location_from_location_to (location_from, location_to);
