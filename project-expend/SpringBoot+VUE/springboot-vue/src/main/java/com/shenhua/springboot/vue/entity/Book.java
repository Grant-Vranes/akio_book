package com.shenhua.springboot.vue.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @Desp If you have any questions,please contact hao.shi3@dxc.com
 * @Author hshi20
 * @Created 2022/1/17 11:09
 */
@Entity
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String author;
}
