-- liquibase formatted sql

-- changeset piotrgajow:simplifySchema
DROP TABLE trip_point;

ALTER TABLE trip
    DROP COLUMN end_time,
    ADD COLUMN time BIGINT NOT NULL;
