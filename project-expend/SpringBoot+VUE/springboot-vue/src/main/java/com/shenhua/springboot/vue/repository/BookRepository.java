package com.shenhua.springboot.vue.repository;

import com.shenhua.springboot.vue.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @Desp If you have any questions,please contact hao.shi3@dxc.com
 * @Author hshi20
 * @Created 2022/1/17 11:13
 */
public interface BookRepository extends JpaRepository<Book, Integer> {
}
