package com.example.demo.controller.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
public class User {
    String name;
    Timestamp dateCreated;
}
