## MYSQL的安装卸载

**安装**

- 从[MySQL官网](http://dev.mysql.com/downloads/mysql)下载zip压缩包并解压到自定义安装位置，这里为C:\Program Files\MySQL\mysql-8.0.23-winx64
- 复制MySQL文件夹下的bin文件夹路径，这里为C:\Program Files\MySQL\mysql-8.0.23-winx64\bin
- 右键 -> 我的电脑 -> 属性 -> 高级系统设置 -> 环境变量，在系统变量中找到PATH并编辑，点击新建并粘贴我们上面复制的路径，依次点击确定退出
- 以管理员身份打开cmd，输入以下命令：

```sql
mysqld --initialize-insecure    #创建data目录并填充mysql系统模式中的表来初始化MySQL安装
mysqld --install [serviceName]   #serviceName为可选项 不输入默认为MySQL
net start mysql           		#安装成功后启动服务
mysqladmin -uroot password yourpass #yourpass 为自己设置的MySQL密码 不执行则默认密码为空
```

**卸载**

卸载前可以备份所有数据库到一个sql文件

```sql
mysqldump -uroot -p --all-databases > sqlfile.sql
```

执行以下命令可以进行数据库文件的导入

```sql
source d:\sqlfile.sql  # d:\sqlfile.sql为要导入sql文件路径
```

执行以下命令进行卸载

```sql
net stop mysql      #mysql为自己安装的mysql服务名称 默认为mysql
mysqld --remove mysql #mysql为自己安装的mysql服务名称 默认为mysql
```

---

以上是一种操作，以下是DXC实习生培训提供的操作文档

> 打开刚刚解压的文件夹 **C:\web\mysql-8.0.11** ，在该文件夹下创建 **my.ini** 配置文件，编辑 **my.ini** 配置以下基本信息：
>
> ```ini
> [client]
> # 设置mysql客户端默认字符集
> default-character-set=utf8
> 
> [mysqld]
> # 设置3306端口
> port = 3306
> 
> # 设置mysql的安装目录
> basedir=C:\\web\\mysql-8.0.11
> 
> # 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
> # datadir=C:\\web\\sqldata
> 
> # 允许最大连接数
> max_connections=20
> 
> # 服务端使用的字符集默认为8比特编码的latin1字符集
> character-set-server=utf8
> 
> # 创建新表时将使用的默认存储引擎
> default-storage-engine=INNODB
> ```
>
> 
>
> **接下来我们来启动下 MySQL 数据库**
>
> 以管理员身份打开 cmd 命令行工具，切换目录：
>
> `cd C:\web\mysql-8.0.11\bin`
>
> 初始化数据库：
>
> `mysqld --initialize --console`
>
> 执行完成后，会输出 root 用户的初始默认密码，如：
>
> ```shell
> ...
> 
> 2018-04-20T02:35:05.464644Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: APWCY5ws&hjQ
> 
> ...
> ```
>
> `APWCY5ws&hjQ `就是初始密码，后续登录需要用到，你也可以在登陆后修改密码。
>
> 输入以下安装命令：
>
> `mysqld install`
>
> 启动输入以下命令即可：
>
> `net start mysql`
>
> *注意:* *在* *5.7* *需要初始化* *data* *目**录**：*
>
> ```
> cd C:\web\mysql-8.0.11\bin 
> 
> mysqld --initialize-insecure 
> ```
>
> 初始化后再运行`net start mysql `即可启动 mysql。
>
> 
>
> **登录 **MySQL
>
> 当 MySQL 服务已经运行时, 我们可以通过 MySQL 自带的客户端工具登录到 MySQL 数据库中, 首先打开命令提示符, 输入以下格式的命名:
>
> `mysql -h 主机名 -u 用户名 -p`
>
> 参数说明：
>
> > ·    **-h** : 指定客户端所要登录的 MySQL 主机名, 登录本机(localhost 或 127.0.0.1)该参数可以省略;
> >
> > ·    **-u** : 登录的用户名;
> >
> > ·    **-p** : 告诉服务器将会使用一个密码来登录, 如果所要登录的用户名密码为空, 可以忽略此选项。
>
> 如果我们要登录本机的 MySQL 数据库，只需要输入以下命令即可：
>
> `mysql -u root -p`
>
> 按回车确认, 如果安装正确且 MySQL 正在运行, 会得到以下响应:
>
> `Enter password:`
>
> 若密码存在, 输入密码登录, 不存在则直接按回车登录。登录成功后你将会看到 Welcome to the MySQL monitor... 的提示语。
>
> 然后命令提示符会一直以 **mysq>** 加一个闪烁的光标等待命令的输入, 输入 `exit` 或 `quit` 退出登录。





## Redis

Redis就是一个能够将信息\数据保存在内存中的缓存数据库

Redis的特质

- Redis是一个缓存数据库,将数据保存在当前服务器的内存中,所以速度非常快
- 虽然Reids是一个内存数据库,但是它允许将Redis中的数据保存在硬盘上,形成备份,以免突然断电丢失数据,计算机重启后可以恢复数据
- Redis保存数据使用键值对(key-value)格式,原理和java的Map类似，使用时可以将Redis认知为一个程序外部的大型Map。
- Redis也叫非关系型数据库，nosql
- Redis保存的数据支持各种类型,最常用的是string
- Redis为了承载更高的并发,支持分布式部署,以达到"高并发,高可用,高性能"的目的



### redis安装

软件解压![image-20211110104815639](Akio's Book.assets/image-20211110104815639.png)

解压后

![image-20211110105152964](Akio's Book.assets/image-20211110105152964.png)

我们仅需操作1，2，这样就可以每次开机自启动

redis默认端口6379



### SpringBoot + Redis

参考视频
https://www.bilibili.com/video/BV1S54y1R7SB?from=search&seid=5424077080837880960&spm_id_from=333.337.0.0	（待看）

https://www.bilibili.com/video/BV1844y1z7LQ/?spm_id_from=autoNext	（待看）

参考文章

https://www.cnblogs.com/zeng1994/p/03303c805731afc9aa9c60dbbd32a323.html





## swagger

先了解前后端分离

Vue+SpringBoot

- 后端:后端控制层,服务层,数据访问层【后端团队】
- 前端:前端控制层,视图层【前端团队】
  - 伪造后端数据,json。已经存在了,不需要后端,前端工程依旧能够跑起来
- 前端后如何交互?===>API
- 前后端相对独立,松耦合;
- 前后端甚至可以部署在不同的服务器上

产生一个问题：

- 前后端集成联调,前端人员和后端人员无法做到“即使协商,尽早解决″,最终导致问题集中爆发;

解决方案：

- 首先指定 schema[计划的提纲],实时更新最新API,降低集成的风险;
- 早些年:指定word计划文档
- 前后端分离
  - 前端测试后端接口: postman
  - 后端提供接口,需要实时更新最新的消息及改动



然后swagger应运而生



### Swagger

- 世界上最流行的API框架
- RestFul Api文档自动生成工具--》== API文档和API定义同步更新 ==

- 直接运行，可以在线测试API接口
- 支持多种语言（java，php）

- https://swagger.io/



于项目中使用Swagger 的SpringFox

- Swagger2

- Swagger ui

- https://mvnrepository.com/search?q=springfox

  ![image-20211110115330852](Akio's Book.assets/image-20211110115330852-16365167209202.png)



### springboot集成swagger

1、创建一个SpringBoot项目，同时加入web依赖

![image-20211110115730656](Akio's Book.assets/image-20211110115730656-16365167140011.png)

2、导入依赖

```xml
<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger2 -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.9.2</version>
</dependency>
<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.9.2</version>
</dependency>
```

3、编写一个HelloController

![image-20211113163812386](Akio's Book.assets/image-20211113163812386.png)

~~~java
@RestController
public class HelloController {
    @RequestMapping(value = "/hello")
    public String hello(){
        return "hello";
    }
}
~~~



4、配置SwaggerConfig

![image-20211113164246976](Akio's Book.assets/image-20211113164246976.png)

~~~java
@Configuration
@EnableSwagger2 //开启Swagger2
public class SwaggerConfig {
    
}
~~~



5、测试运行

http://localhost:8080/swagger-ui.html

<img src="Akio's Book.assets/image-20211113164644954.png" alt="image-20211113164644954" />





### 配置Swagger基本信息

1、Swagger实例Bean是Docket，所以通过配置Docket实例来配置Swaggger。

```java
@Bean //配置docket以配置Swagger具体参数
public Docket docket() {
   return new Docket(DocumentationType.SWAGGER_2);
}
```

2、可以通过apiInfo()属性配置文档信息

```java
//配置文档信息
private ApiInfo apiInfo() {
   Contact contact = new Contact("联系人名字", "http://xxx.xxx.com/联系人访问链接", "联系人邮箱");
   return new ApiInfo(
           "Swagger学习", // 标题
           "学习演示如何配置Swagger", // 描述
           "v1.0", // 版本
           "http://terms.service.url/组织链接", // 组织链接
           contact, // 联系人信息
           "Apach 2.0 许可", // 许可
           "许可链接", // 许可连接
           new ArrayList<>()// 扩展
  );
}
```

3、Docket 实例关联上 apiInfo()

```java
@Bean
public Docket docket() {
   return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo());//apiInfo()即是第二步方法
}
```

完整版代码

![image-20211113170428886](Akio's Book.assets/image-20211113170428886.png)

![image-20211113170235886](Akio's Book.assets/image-20211113170235886.png)



### 配置扫描接口

1、构建Docket时通过select()方法配置怎么扫描接口。

```java
@Bean
public Docket docket() {
   return new Docket(DocumentationType.SWAGGER_2)
      .apiInfo(apiInfo())
      .select()// 通过.select()方法，去配置扫描接口,RequestHandlerSelectors配置如何扫描接口
       			//RequestHandlerSelectors:配置要扫描接口的方式
                //basePackage:指定要扫描的包
                //any():扫描全部
                //none():不扫描
                //withClassAnnotation:扫描类上的注解，参数是一个注解的反射对象
                //withMethodAnnotation:扫描方法上的注解
      .apis(RequestHandlerSelectors.basePackage("com.akio.swagger.demo.controller"))
      .build();
}
```

2、重启项目测试，由于我们配置根据包的路径扫描接口，所以我们只能看到一个类

3、除了通过包路径配置扫描接口外，还可以通过配置其他方式扫描接口，这里注释一下所有的配置方式：

```java
any() // 扫描所有，项目中的所有接口都会被扫描到
none() // 不扫描接口
// 通过方法上的注解扫描，如withMethodAnnotation(GetMapping.class)只扫描get请求
withMethodAnnotation(final Class<? extends Annotation> annotation)
// 通过类上的注解扫描，如.withClassAnnotation(Controller.class)只扫描有controller注解的类中的接口
withClassAnnotation(final Class<? extends Annotation> annotation)
basePackage(final String basePackage) // 根据包路径扫描接口
```

4、除此之外，我们还可以配置接口扫描过滤：

```java
@Bean
public Docket docket() {
   return new Docket(DocumentationType.SWAGGER_2)
      .apiInfo(apiInfo())
      .select()// 通过.select()方法，去配置扫描接口,RequestHandlerSelectors配置如何扫描接口
      .apis(RequestHandlerSelectors.basePackage("com.akio.swagger.demo.controller"))
       // 配置如何通过path过滤,即这里只扫描请求以/hello开头的接口
      .paths(PathSelectors.ant("/hello/**"))//controller的路径
      .build();
}
```

5、这里的可选值还有

```
any() // 任何请求都扫描
none() // 任何请求都不扫描
regex(final String pathRegex) // 通过正则表达式控制
ant(final String antPattern) // 通过ant()控制
```

![Image](Akio's Book.assets/640.webp)





### 配置开关

1、通过enable()方法配置是否启用swagger，如果是false，swagger将不能在浏览器中访问了

```java
@Bean
public Docket docket() {
   return new Docket(DocumentationType.SWAGGER_2)
      .apiInfo(apiInfo())
      .enable(false) //配置是否启用Swagger，如果是false，在浏览器将无法访问
      .select()// 通过.select()方法，去配置扫描接口,RequestHandlerSelectors配置如何扫描接口
      .apis(RequestHandlerSelectors.basePackage("com.akio.swagger.demo.controller"))
       // 配置如何通过path过滤,即这里只扫描请求以/hello开头的接口
      .paths(PathSelectors.ant("/hello/**"))//controller的路径
      .build();
}
```

2、如何动态配置当项目处于test、dev环境时显示swagger，处于prod时不显示？

![image-20211113215030992](Akio's Book.assets/image-20211113215030992.png)

```java
@Bean
public Docket docket(Environment environment) {
   // 设置要显示swagger的环境
   Profiles of = Profiles.of("dev", "test");
   // 判断当前是否处于该环境
   // 通过 enable() 接收此参数判断是否要显示
   boolean flag = environment.acceptsProfiles(of);
   
   return new Docket(DocumentationType.SWAGGER_2)
      .apiInfo(apiInfo())
      .enable(flag) //配置是否启用Swagger，如果是false，在浏览器将无法访问
      .select()// 通过.select()方法，去配置扫描接口,RequestHandlerSelectors配置如何扫描接口
      .apis(RequestHandlerSelectors.basePackage("com.akio.swagger.demo.controller"))
       // 配置如何通过path过滤,即这里只扫描请求以/hello开头的接口
      .paths(PathSelectors.ant("/hello/**"))//controller的路径
      .build();
}
```

3、可以在项目中增加一个dev的配置文件查看效果！

![image-20211113215042300](Akio's Book.assets/image-20211113215042300.png)





### 配置API分组

1、如果没有配置分组，默认是default。通过groupName()方法即可配置分组：

```java
@Bean
public Docket docket(Environment environment) {
   return new Docket(DocumentationType.SWAGGER_2)
      .apiInfo(apiInfo())
      .groupName("Akio's group") // 配置分组
       // 省略配置....
}
```

2、重启项目查看分组

![image-20211113215345703](Akio's Book.assets/image-20211113215345703.png)

3、如何配置多个分组？配置多个分组只需要配置多个docket即可：

```java
@Bean
public Docket docket1(){
   return new Docket(DocumentationType.SWAGGER_2).groupName("group1");
}
@Bean
public Docket docket2(){
   return new Docket(DocumentationType.SWAGGER_2).groupName("group2");
}
@Bean
public Docket docket3(){
   return new Docket(DocumentationType.SWAGGER_2).groupName("group3");
}
```

4、重启项目查看即可



### 配置实体类

1、新建一个实体类

![image-20211113215625665](Akio's Book.assets/image-20211113215625665.png)

```java
@ApiModel("用户实体")
public class User {
   @ApiModelProperty("用户名")
   public String username;
   @ApiModelProperty("密码")
   public String password;
}
```

2、只要这个实体在**请求接口**的返回值上（即使是泛型），都能映射到实体项中：

```java
@RequestMapping("/getUser")
public User getUser(){
   return new User();
}
```

3、重启查看测试

![image-20211113215811648](Akio's Book.assets/image-20211113215811648.png)

注：并不是因为@ApiModel这个注解让实体显示在这里了，而是只要出现在接口方法的返回值上的实体都会显示在这里，而@ApiModel和@ApiModelProperty这两个注解只是为实体添加注释的。

@ApiModel为类添加注释

@ApiModelProperty为类属性添加注释



### 常用注解

Swagger的所有注解定义在io.swagger.annotations包下

下面列一些经常用到的，未列举出来的可以另行查阅说明：

| Swagger注解                                                  | 简单说明                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| @Api(tags = "xxx模块说明")                                   | 作用在模块类上                                               |
| @ApiOperation("xxx接口说明")                                 | 作用在接口方法上                                             |
| @ApiModel("xxxPOJO说明")                                     | 作用在模型类上：如VO、BO                                     |
| @ApiModelProperty(value = "xxx属性说明",hidden = true)       | 作用在类方法和属性上，hidden设置为true可以隐藏该属性         |
| @ApiParam("xxx参数说明")                                     | 作用在参数、方法和字段上，类似@ApiModelProperty              |
| @ApiImplicitParams({})                                       | 作用于方法上，表示方法所有参数的集合                         |
| @ApiImplicitParam(name = "id", value = "合同ID", dataType = "String", paramType = "path") | 作用于@ApiImplicitParams注解中，表示方法的一个参数信息<br/>![image-20211115211134831](Akio's Book.assets/image-20211115211134831.png) |

更多注解详解 https://blog.csdn.net/jiangyu1013/article/details/83107255

我们也可以给请求的接口配置一些注释

```java
@ApiOperation("Akio的接口")
@PostMapping("/akio")
@ResponseBody
public String kuang(@ApiParam("这个名字会被返回")String username){
   return username;
}
```



### 小结

在正式环境要记得关闭Swagger，一来出于安全考虑二来也可以节省运行时内存。

此章节《Swagger》来自https://mp.weixin.qq.com/s/0-c0MAgtyOeKx6qzmdUG0w



## JWT

https://www.bilibili.com/video/BV1cK4y197EM?spm_id_from=333.999.0.0

> 什么是JWT？
>
> JSON Web Token，通过数字签名的方式，以JSON对象为载体，在不同的服务终端之间安全的传输信息。

> JWT有什么用？
>
> JWT最常见的场景就是授权认证,一旦用户登录,后续每个请求都将包含JWT,系统在每次处理用户请求的之前,都要先进行JWT安全校验,通过之后再进行处理

> JWT的组成
>
> JWT由3部分组成，用.拼接，例如
>
> ~~~java
> eyhbGcioiJIUZIINiIsInRSCCI6IkpXVCJ9.eyJ1c2VybmFtZsI6IIRvbSIsInJvbGUTohzGlpbiIsInNlYiI6ImFkbWluLXRIc3Q1LCJleHA2NZUSImpOasI6Imo2MTZjCxLWI5ZmUtNGMWNy04MzQLTVioWViJ9.FOS9Y7rYNdc2AoidnSPrgg2XTYePUOyGZ598h2gtab
> ~~~
>
> 这三部分分别是：
>
> - Header，进行Base64的加密就变成了第一部分
>
>   ~~~json
>   {
>   	'typ': 'JWT',
>   	'alg': 'HS256'
>   }
>   ~~~
>
> - Payload
>
>   ~~~json
>   {
>       "sub": '1234567890',
>       "name": 'john',
>       "admin": true
>   }
>   ~~~
>
> - Signature（签名）
>
>   ~~~json
>   var encodedString = base64UrlEncode(header)+'.'+base64UrlEncode(payload);
>   var signature = HMACSHA256(encodedString,'secret');
>   ~~~

> 实战使用JWT
>
> 1、先导入pom.xml
>
> ```xml
> <dependency>
>  <groupId>io.jsonwebtoken</groupId>
>  <artifactId>jjwt</artifactId>
>  <version>0.9.1</version>
> </dependency>
> //如果JDK1.8以上，下面这些依赖要加上
> <dependency>
>  <groupId>javax.xml.bind</groupId>
>  <artifactId>jaxb-api</artifactId>
>  <version>2.3.0</version>
> </dependency>
> <dependency>
>  <groupId>com.sun.xml.bind</groupId>
>  <artifactId>jaxb-impl</artifactId>
>  <version>2.3.0</version>
> </dependency>
> <dependency>
>  <groupId>com.sun.xml.bind</groupId>
>  <artifactId>jaxb-core</artifactId>
>  <version>2.3.0</version>
> </dependency>
> <dependency>
>  <groupId>javax.activation</groupId>
>  <artifactId>activation</artifactId>
>  <version>1.1.1</version>
> </dependency>
> ```
>
> 2、测试代码
>
> ~~~java
> @SpringBootTest
> class SwaggerDemoApplicationTests {
> 
>  private long time = 1000*60*60*24;
>  private String signature = "admin";//签名
> 
>  @Test
>  public void jwt(){
>      //加密
>      JwtBuilder jwtBuilder = Jwts.builder();
>      String jwtToken = jwtBuilder
>              //header
>              .setHeaderParam("typ", "JWT")
>              .setHeaderParam("alg", "HS256")
>              //payload
>              .claim("username", "Akio")
>              .claim("role", "admin")
>              .setSubject("admin-test")
>              .setExpiration(new Date(System.currentTimeMillis()+time))//令牌过期时间
>              .setId(UUID.randomUUID().toString())
>              //signature
>              .signWith(SignatureAlgorithm.HS256, signature)
>              .compact();//拼接
>      System.out.println(jwtToken);
>      //为以上信息生成了一个独一无二的令牌，这个令牌唯一指定这个用户
>  }
> 
>  @Test
>  public void parse(){
>      //上面程序生成的令牌
>      String token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRvbSIsInJvbGUiOiJhZG1pbiIsInN1YiI6ImFkbWluLXRlc3QiLCJleHAiOjE2MzY5MDUyNDksImp0aSI6ImVhMzhjMGJjLTAzZGYtNGViYi1iMmZlLTNjNzk1OTEzZTJhMyJ9.LL7FFJBxy3j6aJVir8iwf1kFStjqnlr9k_c309E2ROA";
>      //解密
>      JwtParser jwtParser = Jwts.parser();
>      Jws<Claims> claimsJws = jwtParser.setSigningKey(signature).parseClaimsJws(token);//根据签名解析token信息
>      Claims claims = claimsJws.getBody();
>      System.out.println(claims.get("username"));
>      System.out.println(claims.get("role"));
>      System.out.println(claims.getId());
>      System.out.println(claims.getSubject());
>      System.out.println(claims.getExpiration());
>  }
> }
> ~~~
>
> ![image-20211114000109577](Akio's Book.assets/image-20211114000109577.png)





## SpringBoot + JWT +VUE

https://www.bilibili.com/video/BV1Kf4y187Fz/?spm_id_from=autoNext

![image-20211114103852775](Akio's Book.assets/image-20211114103852775.png)

把JWT的加密和解密认证作为一个util工具类来使用

> ~~~java
> public class JwtUtil {
> 
>  private static long time = 1000*60*60*24;
>  private static String signature = "admin";//签名
> 
>  public static String createToken(){
>      //加密
>      JwtBuilder jwtBuilder = Jwts.builder();
>      String jwtToken = jwtBuilder
>              //header
>              .setHeaderParam("typ", "JWT")
>              .setHeaderParam("alg", "HS256")
>              //payload
>              .claim("username", "Akio")
>              .claim("role", "admin")
>              .setSubject("admin-test")
>              .setExpiration(new Date(System.currentTimeMillis()+time))//令牌过期时间
>              .setId(UUID.randomUUID().toString())
>              //signature
>              .signWith(SignatureAlgorithm.HS256, signature)
>              .compact();//拼接
>      System.out.println(jwtToken);
>      //为以上信息生成了一个独一无二的令牌，这个令牌唯一指定这个用户
>      return jwtToken;
>  }
> 
>  public static boolean checkToken(String token){
>      if (token == null){
>          return false;
>      }
>      try {
>          Jws<Claims> claimsJws = Jwts.parser().setSigningKey(signature).parseClaimsJws(token);
>      } catch (Exception e) {
>          return false;
>      }
>      return true;
>  }
> }
> ~~~





## VO POJO Dto

![image-20211111093816724](Akio's Book.assets/image-20211111093816724.png)

VO->是视图层对象。作用是给视图页面的数据封装。
PO->是持久层对象，作用就是跟持久层的数据作一一对应的关系，相当于一张表一个类，每张表的字段就是每个PO类的属性；
DTO->是数据传输对象，主要用于数据传输，比如我们有一个表，含有十几个字段，那么对应的 PO 就有十几个属性，但我们只需要5 个字段，因此没有必要把整个 PO 对象传递过去，我们只需把5 个属性的 DTO 把结果传递过去即可；

比如一个用户在页面操作数据，发出了一个请求。
刚开始数据在页面上展示时候均为VO；VO 的数据是跟页面一一对应。
VO在传到服务层之前，需要将VO转换成DTO再传给服务层。这里转DTO原因之前说了，比如页面有几十个字段，我只要其中几个。没有必要全部给我，所以是转DTO来传输。
然后根据DTO传过来的数据，我们会构造出一个BO，也就是业务逻辑对象，一般在Business这个包。在BO这一段我们会完成具体的业务逻辑。业务逻辑完成后，数据你需要更新到数据库吧？
所以，此时BO的数据就需要转换成对应的PO，因为一个PO对应一张表，所以需要用PO去完成数据的持久化。





## 各种Mapping详解

https://www.cnblogs.com/muxi0407/p/11599570.html

@GetMapping、@PostMapping、@PutMapping、@DeleteMapping、@PatchMapping、@RequestMapping

| *Mapping       | 用处                                                         |
| -------------- | ------------------------------------------------------------ |
| @GetMapping    | 处理get请求，传统的RequestMapping来编写应该是<br/>`@RequestMapping(value = “/get/{id}”, method = RequestMethod.GET)`<br/>新方法可以简写为：<br/>`@GetMapping("/get/{id}")` |
| @PostMapping   | 处理post请求，传统的RequestMapping来编写应该是<br/>`@RequestMapping(value = “/get/{id}”,method = RequestMethod.POST)`<br/>新方法可以简写为：<br/>`@PostMapping("/get/{id}")` |
| @PutMapping    | 和PostMapping作用等同，都是用来向服务器提交信息。如果是添加信息，倾向于用@PostMapping，如果是更新信息，倾向于用@PutMapping。两者差别不是很明显。 |
| @DeleteMapping | 删除URL映射                                                  |
| @PatchMapping  | 一般不用                                                     |





## Nginx

### 装载启动

https://nginx.org/en/download.html

软件下载，下载Stable version稳定版

![image-20211115160056014](Akio's Book.assets/image-20211115160056014.png)

解压后，将前端打包好的项目放进来（方便操作）

![image-20211115160925202](Akio's Book.assets/image-20211115160925202.png)

然后修改conf中的nginx.conf，将root的路径改为打包好的项目的路径，注意看到默认端口是80

![image-20211115163243200](Akio's Book.assets/image-20211115163243200.png)

![image-20211115163309135](Akio's Book.assets/image-20211115163309135.png)

保存后，访问`http://localhost/`即可访问打包好的项目

![image-20211115163837322](Akio's Book.assets/image-20211115163837322.png)



### 命令

> 启动
>
> 直接点击Nginx目录下的nginx.exe    或者    当前路径下的cmd命令运行start nginx

> 关闭
>
> nginx -s stop    或者    nginx -s quit
>  stop表示立即停止nginx,不保存相关信息
>  quit表示正常退出nginx,并保存相关信息

> 重启
>
> (因为改变了配置,需要重启)
>  nginx -s reload

> 注意：以上命令均需要到nginx的路径的cmd下运行，他暂时没有全局命令
>
> ![image-20211116092752301](Akio's Book.assets/image-20211116092752301.png)







## Windows中杀死指定端口

1、查询端口占用`netstat -aon|findstr "8080"`

2、 强行杀死进程`taskkill /pid 16744 -t -f`

![image-20211117095420806](Akio's Book.assets/image-20211117095420806.png)





## 微信支付V3

### 导入依赖

要求你先配置为阿里云的镜像仓库(.m2文件夹下)

```xml
<dependency>
    <groupId>com.github.wechatpay-apiv3</groupId>
    <artifactId>wechatpay-apache-httpclient</artifactId>
    <version>0.2.3</version>
</dependency>
```







## 枚举类型

https://www.bilibili.com/video/BV1QK4y1S7LP?from=search&seid=13324217044397930595&spm_id_from=333.337.0.0

### 1、枚举类型的基本使用

##### **常量项需求**

在系统中有一些变量它具有固定的取值范围,比如:学生类的性别属性包括男、女两个值；商城的支付方式包括微信支付、支付宝支付、银联支付三种方式等，在程序中对这些取值通常用常量来表示，因为它们是固定在一定范围内的，如下代码是支付类中支付方式的的表示方式：

~~~java
public class PayFactory {
    //微信支付类型
    public static final String weixinPayType = "weixin";
    //微信支付接口地址
    public static final String weixinPayUrl = "https://api.mch.weixin.qq.com/pay/";

    //支付宝支付类型
    public static final String aliPayType = "ali";
    //支付宝支付接口地址
    public static final String aliPayUrl = "https://openapi.alipay.com";

    //根据支付类型获取支付服务对象
    public static Pay getPay(String PayType){
        Pay pay = null;
        switch(payType){
            case PayFactory.weixinPayType:
                //构造微信支付对象...
                break;
            case PayFactory.aliPayType:
                //构造支付宝支付对象...
                break;
            default:
                break;
        }
        return pay;
    }
}
~~~

以上使用常量来表示支付方式相关的数据存在以下问题：

1、代码不够简洁
		PayFactory工厂类中光常量的配置都占据一般的代码，不方便阅读

2、不能很好的对数据进行分类
		支付类型和支付接口地址靠人工命名关联在一起容易出错，常量越多越不方便管理

对于大型项目的开发类似的配置有很多,如果有一种简洁、分类配置常量的方式将会大大提高我们的生产效率



##### 枚举类型介绍

java中对常量数据的配置可以使用枚举类型实现，枚举类型是面向对象中的一种类型，它也有对象、属
性、方法等，所以它非常方便定义，枚举类型将它的对象(实例)设置为常量方便读取和使用。

枚举类型定义格式如下:

~~~java
//定义枚举类型要使用的关键字enum
public enum 枚举类名 {
    枚举项1, 枚举项2, 枚举项3...;
    成员变量
    构造方法
    成员方法getter/setter
}
~~~

~~~java
public enum PayEnum {
    //枚举项，采用全部大写命名
    //枚举项就是一个一个对象，他是常量，可定义枚举项的时候调用构造方法
    WEIXINPAY("weixin","https://api.mch.weixin.qq.com/pay/"),
    ALIPAY("ali","https://openapi.alipay.com");

    private String name;//支付名称
    private String payUrl;//支付接口地址

    //定义构造方法，枚举类型构造方法是private
    private PayEnum() {
    }

    private PayEnum(String name, String payUrl) {
        this.name = name;
        this.payUrl = payUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {//看你定义的场景，有时候，可以不提供set方法
        this.name = name;
    }

    public String getPayUrl() {
        return payUrl;
    }

    public void setPayUrl(String payUrl) {
        this.payUrl = payUrl;
    }
}
~~~

~~~java
public static void main(String[] args) {
        PayEnum.WEIXINPAY.getName();
        PayEnum.WEIXINPAY.getPayUrl();
    	
    	//枚举项就是一个对象（实例）
        PayEnum alipay = PayEnum.ALIPAY;
        //枚举项之间使用==进行比较,基本数据类型比较值；引用数据类型比较地址
        System.out.println(alipay == PayEnum.ALIPAY);//true
    }
//这样就可以直接获取
~~~

说明如下：
1、每个枚举类型继承java.lang.Enum, 所以枚举类不能再继承其它类型
2、枚举项就是枚举类型的对象(实例),一般使用大写字母,一个枚举项表示一个常量项,多个枚举项中间用逗号分隔。
3、枚举类型的构造方法使用private私有。
4、通过"`枚举类名.枚举项名称`"去访问指定的枚举项。



##### 枚举类实现接口

枚举类型虽然不能继承其他类但是可以实现一个或多个接口，这个在生产使用中较多

```java
接口
public interface SystemCode {
    //系统代码
    int getCode();

    //系统代码对应的描述
    String getDesc();
}
```

~~~java
public enum CodeEnum implements SystemCode {
    SUCCESSFUL(1,"操作成功"),
    ERROR(-1,"系统异常");

    private CodeEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    int code;//系统代码
    String desc;//对应描述

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }
}
~~~

~~~java
public static void main(String[] args) {
        //枚举类型可以向上转型为接口类型
        SystemCode code = CodeEnum.SUCCESSFUL;
        System.out.println(code.getCode());
        System.out.println(code.getDesc());
    }
~~~

对于第二点中我们知道了枚举项之间使用==进行比较，所以我们可以使用新的bean工厂

```java
public class PayFactory {
    
    //根据支付类型获取支付服务对象
    public static Pay getPay(PayEnum payEnum){《《《
        //支付对象
        Pay pay = null;
        switch(payEnum){
            case WEIXINPAY://这里要匹配枚举项
                //构造微信支付对象...
                break;
            case ALIPAY:
                //构造支付宝支付对象...
                break;
            default:
                break;
        }
        return pay;
    }
}

main{
    //将枚举项传入工厂方法
    Pay p = PayFactory.getPay(PayEnum.WEIXINPAY);
}
```







## 解决高版本JDK中sun.misc包报错的问题

https://blog.csdn.net/qq_29178991/article/details/79666924

~~~java
import sun.misc.BASE64Encoder;
import sun.misc.BASE64Decoder;
~~~

在项目中，设计到64位编码的。有时开发会用到JDK中自带的BASE64工具。但sun公司是建议不这样做的。尤其是更新了JDK版本，项目甚至还存在保存的信息。可引用`import org.apache.commons.codec.binary.Base64;`进行替换

| `import sun.misc.BASE64Encoder;`<br/>`import sun.misc.BASE64Decoder;` | >    | `import org.apache.commons.codec.binary.Base64;`    |
| ------------------------------------------------------------ | ---- | --------------------------------------------------- |
| `return new  BASE64Encoder().encode(encrypted);`             | >    | `return Base64.encodeBase64String(encrypted);`      |
| `byte[] encrypted1 = new BASE64Decoder().decodeBuffer(text);` | >    | `byte[] encrypted1 =Base64.decodeBase64(text);	` |





## Linux指令大全

#### 1、基本文件操作命令

![image-20211120103821211](Akio's Book.assets/image-20211120103821211.png)

![image-20211120103918941](Akio's Book.assets/image-20211120103918941.png)

![image-20211120104029469](Akio's Book.assets/image-20211120104029469.png)



#### 2、权限管理

![image-20211120104315395](Akio's Book.assets/image-20211120104315395.png)



#### 3、文件搜索

![image-20211120111100070](Akio's Book.assets/image-20211120111100070.png)

![image-20211120104625928](Akio's Book.assets/image-20211120104625928.png)



#### 4、压缩

![image-20211120104726924](Akio's Book.assets/image-20211120104726924.png)





#### 5、网络通信与输入输出重定向，管道，命令替换符

![image-20211120104803467](Akio's Book.assets/image-20211120104803467.png)

![image-20211120105035163](Akio's Book.assets/image-20211120105035163.png)



#### 6、文本编辑命令

书接上集

![image-20211120105113210](Akio's Book.assets/image-20211120105113210.png)

![image-20211120105151483](Akio's Book.assets/image-20211120105151483.png)



#### 7、Linux软件包管理

书接上集

![image-20211120105230569](Akio's Book.assets/image-20211120105230569.png)

![image-20211120105344094](Akio's Book.assets/image-20211120105344094.png)



#### 8、用户管理

![image-20211120105441763](Akio's Book.assets/image-20211120105441763.png)

![image-20211120105606118](Akio's Book.assets/image-20211120105606118.png)

![image-20211120105706101](Akio's Book.assets/image-20211120105706101.png)

![image-20211120105735937](Akio's Book.assets/image-20211120105735937.png)



#### 9、进程

书接上集

![image-20211120105839974](Akio's Book.assets/image-20211120105839974.png)

![image-20211120105922272](Akio's Book.assets/image-20211120105922272.png)



#### 10、计划任务

书接上集

![image-20211120110005520](Akio's Book.assets/image-20211120110005520.png)





#### 11、文件系统、磁盘配额、备份（夹杂一点用户管理）

![image-20211120111603466](Akio's Book.assets/image-20211120111603466.png)

![image-20211120110205713](Akio's Book.assets/image-20211120110205713.png)

![image-20211120110255577](Akio's Book.assets/image-20211120110255577.png)

![image-20211120110341926](Akio's Book.assets/image-20211120110341926.png)





#### 12、shell程序

书接上集，其中包含精准检索awk，还有sed，sort，seq等

![image-20211120110416303](Akio's Book.assets/image-20211120110416303.png)

![image-20211120110437905](Akio's Book.assets/image-20211120110437905.png)

![image-20211120110510214](Akio's Book.assets/image-20211120110510214.png)

![image-20211120110626399](Akio's Book.assets/image-20211120110626399.png)

![image-20211120110722222](Akio's Book.assets/image-20211120110722222.png)

![image-20211120110758673](Akio's Book.assets/image-20211120110758673.png)

![image-20211120110821644](Akio's Book.assets/image-20211120110821644.png)





#### 13、查看软件安装目录

**linux查看redis安装目录**

1.在redis下查看安装目录

如果命令 which 和whereis 都找不到安装目录，可使用以下办法

```
ps -ef|grep redis
```

得到了进程号 xxxx

 然后 ls -l /proc/xxxx/cwd

![img](Akio's Book.assets/1016915-20190618141227160-1437324708.png)





#### 14、find详解

https://blog.csdn.net/xxmonstor/article/details/80507769



#### 15、tail详解

https://blog.csdn.net/weixin_44019406/article/details/102805197



#### 16、grep详解

https://blog.csdn.net/lijing742180/article/details/84959963





#### 17、linux的显示并保存

https://zhuanlan.zhihu.com/p/336943961

![image-20211201114941401](Akio's Book.assets/image-20211201114941401.png)





## JSON+Ajax

### JSON

参考视频
https://www.bilibili.com/video/BV1Pt411u7R3?from=search&seid=8214723860191678637&spm_id_from=333.337.0.0

参考文件
https://mp.weixin.qq.com/s/RAqRKZJqsJ78HRrJg71R1g

暂时比较常用的JSON依赖有两个Jackson和fastjson

> 什么是JSON？

- JSON(JavaScript Object Notation, JS 对象标记) 是一种轻量级的数据交换格式，目前使用特别广泛。
- 采用完全独立于编程语言的**文本格式**来存储和表示数据。
- 简洁和清晰的层次结构使得 JSON 成为理想的数据交换语言。
- 易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效率。

在 JavaScript 语言中，一切都是对象。因此，任何JavaScript 支持的类型都可以通过 JSON 来表示，例如字符串、数字、对象、数组等。看看他的要求和语法格式：

- 对象表示为键值对，数据由逗号分隔

- 花括号保存对象

- 方括号保存数组

  

**Jackson**

```xml
<!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-core -->
<dependency>
   <groupId>com.fasterxml.jackson.core</groupId>
   <artifactId>jackson-databind</artifactId>
   <version>2.9.8</version>
</dependency>
```

```java
@RestController
public class UserController {
   //produces:指定响应体返回类型和编码，避免返回值出现乱码问题
   @GetMapping(value = "/json1",produces = "application/json;charset=utf-8")
   public String json1() throws JsonProcessingException {
       //创建一个jackson的对象映射器，用来解析数据
       ObjectMapper mapper = new ObjectMapper();
       //创建一个对象
       User user = new User("Grant", 3, "男");
       //将我们的对象解析成为json格式
       String str = mapper.writeValueAsString(user);
       //这里会将str转成json格式返回；十分方便
       return str;
  }
}
```



**fastjson**

```xml
<dependency>
   <groupId>com.alibaba</groupId>
   <artifactId>fastjson</artifactId>
   <version>1.2.60</version>
</dependency>
```

fastjson.jar是阿里开发的一款专门用于Java开发的包，可以方便的实现json对象与JavaBean对象的转换，实现JavaBean对象与json字符串的转换，实现json对象与json字符串的转换。

fastjson 有三个主要的类：

- **JSONObject  代表 json 对象** 

  - JSONObject实现了Map接口, 猜想 JSONObject底层操作是由Map实现的。

  - JSONObject对应json对象，通过各种形式的get()方法可以获取json对象中的数据，也可利用诸如size()，isEmpty()等方法获取"键：值"对的个数和判断是否为空。其本质是通过实现Map接口并调用接口中的方法完成的。

- **JSONArray  代表 json 对象数组**
  - 内部是有List接口中的方法来完成操作的。

- **JSON代表 JSONObject和JSONArray的转化**

  - JSON类源码分析与使用

  - 仔细观察这些方法，主要是实现json对象，json对象数组，javabean对象，json字符串之间的相互转化。

```java
package com.akio.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.kuang.pojo.User;

import java.util.ArrayList;
import java.util.List;

public class FastJsonDemo {
   public static void main(String[] args) {
       //创建一个对象
       User user1 = new User("1号", 3, "男");
       User user2 = new User("2号", 3, "男");
       User user3 = new User("3号", 3, "男");
       User user4 = new User("4号", 3, "男");
       List<User> list = new ArrayList<User>();
       list.add(user1);
       list.add(user2);
       list.add(user3);
       list.add(user4);

       System.out.println("*******Java对象 转 JSON字符串*******");
       String str1 = JSON.toJSONString(list);
       System.out.println("JSON.toJSONString(list)==>"+str1);
       String str2 = JSON.toJSONString(user1);
       System.out.println("JSON.toJSONString(user1)==>"+str2);

       System.out.println("\n****** JSON字符串 转 Java对象*******");
       User jp_user1=JSON.parseObject(str2,User.class);//如果不加第二个参数就是JSON字符串转成JSON对象
       System.out.println("JSON.parseObject(str2,User.class)==>"+jp_user1);

       System.out.println("\n****** Java对象 转 JSON对象 ******");
       JSONObject jsonObject1 = (JSONObject) JSON.toJSON(user2);
       System.out.println("(JSONObject) JSON.toJSON(user2)==>"+jsonObject1.getString("name"));

       System.out.println("\n****** JSON对象 转 Java对象 ******");
       User to_java_user = JSON.toJavaObject(jsonObject1, User.class);
       System.out.println("JSON.toJavaObject(jsonObject1, User.class)==>"+to_java_user);
  }
}
```







### Ajax

参考视频
https://www.bilibili.com/video/BV1Kt411u7BV?spm_id_from=333.999.0.0

参考文章
https://mp.weixin.qq.com/s/tB4YX4H59wYS6rxaO3K2_g

> 简介

- **AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。**
- AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。
- **Ajax 不是一种新的编程语言，而是一种用于创建更好更快以及交互性更强的Web应用程序的技术。**
- 在 2005 年，Google 通过其 Google Suggest 使 AJAX 变得流行起来。Google Suggest能够自动帮你完成搜索单词。
- Google Suggest 使用 AJAX 创造出动态性极强的 web 界面：当您在谷歌的搜索框输入关键字时，JavaScript 会把这些字符发送到服务器，然后服务器会返回一个搜索建议的列表。
- 就和国内百度的搜索框一样!

- 传统的网页(即不用ajax技术的网页)，想要更新内容或者提交一个表单，都需要重新加载整个网页。

- 使用ajax技术的网页，通过在后台服务器进行少量的数据交换，就可以实现异步局部更新。

- 使用Ajax，用户可以创建接近本地桌面应用的直接、高可用、更丰富、更动态的Web用户界面。

  > 此处可以引申一下Axios和Ajax有什么区别https://blog.csdn.net/qq_42942555/article/details/88400721





## xml中书写sql

https://blog.csdn.net/duoen197231/article/details/52857443



## 微信登录

https://www.bilibili.com/video/BV1744y1y7iv?p=1	（主）

https://www.bilibili.com/video/BV17y4y1L78u?share_medium=android&share_plat=android&share_session_id=db6bbbae-71a2-4ff2-bc21-cf400090617a&share_source=COPY&share_tag=s_i&timestamp=1628985985&unique_k=Zm6VbX	（次）





## 拦截器

参考视频
https://www.bilibili.com/video/BV1Wq4y1L7hp?p=1
https://www.bilibili.com/video/BV1gK4y1x7Ww?spm_id_from=333.999.0.0

参考文献
https://www.cnblogs.com/black-spike/p/7813238.html

### 1.拦截器概述

#### 1.1 什么是拦截器？

Spring MVC中的拦截器（Interceptor）类似于Servlet中的过滤器（Filter），它主要用于拦截用户请求并作相应的处理。例如通过拦截器可以进行权限验证、记录请求信息的日志、判断用户是否登录等。
要使用Spring MVC中的拦截器，就需要对拦截器类进行定义和配置。通常拦截器类可以通过两种方式来定义。

```xml
1.通过实现HandlerInterceptor接口，或继承HandlerInterceptor接口的实现类（HandlerInterceptorAdapter）来定义。

2.通过实现WebRequestInterceptor接口，或继承WebRequestInterceptor接口的实现类来定义。
```

以实现HandlerInterceptor接口方式为例，自定义拦截器类的代码如下：

```java
public class CustomInterceptor implements HandlerInterceptor{
        public boolean preHandle(HttpServletRequest request, 
                                 HttpServletResponse response, Object handler)throws Exception {
            return false;
        }
        public void postHandle(HttpServletRequest request, 
                               HttpServletResponse response, Object handler,
                               ModelAndView modelAndView) throws Exception {
            
        }
        public void afterCompletion(HttpServletRequest request,
                                    HttpServletResponse response, Object handler,
                                    Exception ex) throws Exception {
        }
    }
```

上述代码中，自定义拦截器实现了HandlerInterceptor接口，并实现了接口中的三个方法：

- preHandle() 方法：该方法会在控制器方法前执行，其返回值表示是否中断后续操作。当其返回值为true时，表示继续向下执行；
  当其返回值为false时，会中断后续的所有操作（包括调用下一个拦截器和控制器类中的方法执行等）。
- postHandle()方法：该方法会在控制器方法调用之后，且解析视图之前执行。可以通过此方法对请求域中的模型和视图做出进一步的修改。
- afterCompletion()方法：该方法会在整个请求完成，即视图渲染结束之后执行。可以通过此方法实现一些资源清理、记录日志信息等工作。



#### 1.2 拦截器的配置

##### 传统xml方式配置拦截器

开发拦截器就像开发servlet或者filter一样，都需要在配置文件进行配置，配置代码如下：

```xml
<!--配置拦截器-->
    <mvc:interceptors>
        <!--<bean class="com.ma.interceptor.CustomeInterceptor" />-->
        <!--拦截器1-->
        <mvc:interceptor>
            <!--配置拦截器的作用路径-->
            <mvc:mapping path="/**"/>
            <mvc:exclude-mapping path=""/>
            <!--定义在<mvc:interceptor>下面的表示匹配指定路径的请求才进行拦截-->
            <bean class="com.ma.interceptor.Intercptor1"/>
        </mvc:interceptor>
        <!--拦截器2-->
        <mvc:interceptor>
            <mvc:mapping path="/hello"/>
            <bean class="com.ma.interceptor.Interceptor2"/>
        </mvc:interceptor>
```

上面的代码中，

`<mvc:interceptors>`素用于配置一组拦截器，基子元素<bean>中定义的是全局拦截器，它会拦截所有的请求；

而`<mvc:interceptor>`元素中定义的是指定路径的拦截器，它会对指定路径下的请求生效。

`<mvc:interceptor>`元素的子元素`<mvc:mapping>`用于配置拦截器作用的路径，该路径在其属性path 中定义。如上述代码中 path 的属性值“/”  表示拦截所有路径，“/hello” 表示拦截所有以 “/hello” 结尾的路径。如果在请求路径中包含不需要拦截的内容，还可以通过`<mvc:exclude-mapping>`元素进行配置。

**注意：`<mvc:interceptor>`中的子元素必须按照上述代码中的配置顺序进行编写，即`<mvc:mapping> <mvc:exclude-mapping><bean>`，否则文件会报错。**



##### Springboot中WebConfig中配置

![image-20211120212947378](Akio's Book.assets/image-20211120212947378.png)

```java
@Configuration
class WebMvcConfig implements WebMvcConfigurer {
    @Autowired
    private CustomHandlerInterceptor customHandlerInterceptor;//@

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //拦截所有，除了exclude中的
        //registry.addInterceptor(customHandlerInterceptor).addPathPatterns("/**")//@
        registry.addInterceptor(getHandlerInterceptor()).addPathPatterns("/**")//#
                .excludePathPatterns(
                        "/**/login/**",
                        "/webjars/**",
                        "/error",
                        "/v2/**",
                        "/swagger-ui.html",
                        "/swagger-resources/**",
                        "/**/KoneService/**",
                        "/**/aligenie/**",
                        "/**/property/**",
                        "/**/equipmentTxt/**",
                        "/IUYJZxRk0N.txt"
                );
    }

    @Bean	//这里直接把拦截器当作bean注入进来		#
    public static CustomHandlerInterceptor getHandlerInterceptor() {
        return new CustomHandlerInterceptor();
    }
}
```







## AOP

### 日志







## git-stash

https://www.bilibili.com/video/BV1Df4y1S73d?from=search&seid=6949972506132106251&spm_id_from=333.337.0.0

https://blog.csdn.net/sinat_34937826/article/details/107316884

![image-20211122204429966](Akio's Book.assets/image-20211122204429966.png)

暂存更改，会将push之后操作的所有操作放入暂存区，并清空更改。多个分支暂存通用

Unstash使用更改

使用场景：提交暂存，然后将远程别人更新后的代码拉下来覆盖，再使用自己的暂存文件进行合并，然后提交更改push到远程。用于解决https://www.jianshu.com/p/14afc9916dcb









## 配置文件的ENC加密

https://www.w3cschool.cn/article/57904429.html





## WebSocket

https://www.ruanyifeng.com/blog/2017/05/websocket.html



## Java日期格式化（DateFormat类和SimpleDateFormat类）

http://c.biancheng.net/view/878.html





修改

```java
wechatusercontroller
    
    @PostMapping("/serviceProtocolVersion/{openid}/check")
    @ApiOperation("检查小程序用户服务协议版本是否最新")
    public JSONResult checkServiceProtocolVersion(@PathVariable String openid){
        JSONResult result = new JSONResult(JSONResult.OK);
        result.setData(weChatUserService.checkServiceProtocolVersion(openid));
        return result;
    }

    @PostMapping("/serviceProtocolVersion/{openid}/update")
    @ApiOperation("小程序用户同意服务协议后更新字段service_protocol_version为当前服务协议版本")
    public JSONResult updateServiceProtocolVersion(@PathVariable String openid) {
        return weChatUserService.updateServiceProtocolVersion(openid);
    }


/**
     * 作为判断方法
     * @param openid
     * @return
     */
    public Boolean checkServiceProtocolVersion(String openid){
        String serviceProtocolVersion = tUserMapper.getServiceProtocolVersion(openid);
        //该用户没有更新协议
        if (!ProtocolVersionConstant.service_protocol_version.getValue().equals(serviceProtocolVersion) || serviceProtocolVersion==""){
            return false;
        }
        return true;
    }



public JSONResult updateServiceProtocolVersion(String openid) {
        JSONResult result = new JSONResult(JSONResult.OK);
        Integer affectedRow = tUserMapper.updateServiceProtocolVersion(openid, ProtocolVersionConstant.service_protocol_version.getValue());
        if (affectedRow == 1){
            result.setData(true);
            return result;
        }
        result.setData(false);
        return result;
    }

@Select("select service_protocol_version from t_user_wechat where wechat_id=#{openid}")
    String getServiceProtocolVersion(String openid);


@Update("update t_user_wechat set service_protocol_version=#{serviceProtocolVersion} where wechat_id=#{openid}")
    Integer updateServiceProtocolVersion(String openid, String serviceProtocolVersion);




/**
     * 修改天猫精灵的呼叫类型，应该传入天猫精灵的id，即t_user_genie中的ali_genie_id字段
     * 天猫精灵是单一绑定？
     * 需不需要加一个用户的验证
     * @return
     */
    @PostMapping("/changeCallType")
    @ApiOperation("天猫精灵修改呼叫类型")
//    public JSONResult changeCallType(String deviceOpenId, String wechatOpenId) {
    public JSONResult changeCallType(String uuid) {
        //CustomBuildingDto
//        return aliGenieService.changeCallType(deviceOpenId, wechatOpenId);
        return aliGenieService.changeCallType(uuid);
    }


 /**
     * 根据t_user_genie中的id，修改呼叫状态
     * @param uuid
     * @return
     */
    public JSONResult changeCallType(String uuid) {
        JSONResult result = new JSONResult(JSONResult.OK);
        //根据uuid在t_user_genie表中查询对应的绑定记录
        String customBuildingId = aliGenieMapper.getCustomBuildingIdByUUid(uuid);
        if (StringUtil.isEmpty(customBuildingId)) {
            result.setData(false);
            return result;
        } else {
            Integer affectRow = aliGenieMapper.changeCallType(customBuildingId);
            if (affectRow != 1){
                result.setData(false);
                return result;
            }
            result.setData(true);
        }
        return result;
    }


    /**
     * Akio:
     * @param uuid
     * @return
     */
    @Select("select custom_building_id from t_user_genie where id=#{uuid} and status=1")
    String getCustomBuildingIdByUUid(String uuid);


 /**
     * Akio:改变呼叫类型，但需要注意精灵的开启状态 and genie_status=1是否有加入sql的必要
     * @param custombuildingId
     */
    @Update("update t_custom_building set call_type=\n" +
            "\tcase when call_type='0' then '1' when call_type='1' then '0' end where id=#{custombuildingId}")
    Integer changeCallType(String custombuildingId);
```







## SpringBoot项目敏感信息如何加密保护

https://www.bilibili.com/video/BV1xq4y167so?spm_id_from=333.999.0.0

- 导入此依赖

  ```xml
  <!-- https://mvnrepository.com/artifact/com.github.ulisesbocchio/jasypt-spring-boot-starter -->
  <dependency>
      <groupId>com.github.ulisesbocchio</groupId>
      <artifactId>jasypt-spring-boot-starter</artifactId>
      <version>3.0.3</version>
  </dependency>
  
  ```

- 在application.properties中配置文件中加盐，注意数据全部加密完成后，这个需要删除

  ```properties
  #加盐密码，解密的时候需要用到
  jasypt.encryptor.password=123
  ```

  如果没有这一步，后面的运行可能会出现如下错误

  ![image-20211202201610694](Akio's Book.assets/image-20211202201610694.png)

- 加密很简单

  ```java
  @SpringBootTest
  public class EncryptorTest {
      @Autowired
      private StringEncryptor stringEncryptor;
  
      @Test
      public void encryptorTest() {
          //加密
          String usernameEnc = stringEncryptor.encrypt("root");
          System.out.println("加密后的用户名:" + usernameEnc);
  
          //解密
          String usernameDec = stringEncryptor.decrypt(usernameEnc);
          System.out.println("解密后的用户名:" + usernameDec);
      }
  }
  ```

  ![image-20211202201842630](Akio's Book.assets/image-20211202201842630.png)

- 拿到加密后的数据放到application.properties文件中需要使用`ENC()`包裹

  ```properties
  spring.datasource.name=ENC(dWVwWQvdQahnO/WaSvT6bAqmLsoidd7lRMoA6G2nDLCh+vXFjKaeImnQjcPPYdrR)
  ```

- 在程序运行时使用他的时候，就需要我们的加盐密码去解密，这里我们运行启动的时候我们需要配置启动项。通过JVM参数传过去

  ![image-20211202202808621](Akio's Book.assets/image-20211202202808621.png)

  当然，如果我们部署运行的时候就直接`java -jar -Djasypt.encryptor.password=123 ..`启动程序





## docker

https://www.bilibili.com/video/BV1ug411j71W?from=search&seid=17010080874400657756&spm_id_from=333.337.0.0

### 简介

![image-20211202203842145](Akio's Book.assets/image-20211202203842145.png)

![image-20211202203900623](Akio's Book.assets/image-20211202203900623.png)

![image-20211202204012266](Akio's Book.assets/image-20211202204012266.png)

![image-20211202203954273](Akio's Book.assets/image-20211202203954273.png)



### docker背景

企业级开发中

<img src="Akio's Book.assets/image-20211202204519187.png" alt="image-20211202204519187" style="zoom:70%;" />

![image-20211202204822552](Akio's Book.assets/image-20211202204822552.png)

![image-20211202205014030](Akio's Book.assets/image-20211202205014030.png)

这么多情况的解决方案就是docker



### docker介绍

![image-20211202205234513](Akio's Book.assets/image-20211202205234513.png)

![image-20211202205313235](Akio's Book.assets/image-20211202205313235.png)

![image-20211202205742575](Akio's Book.assets/image-20211202205742575.png)

![image-20211202205953409](Akio's Book.assets/image-20211202205953409.png)



### docker基本概念

docker包括三个基本概念

- 镜像（Image）
- 容器（Container）
- 仓库（Repository）

理解了这三个概念，就理解了Docker的整个生命周期



### docker仓库

Docker仓库用于保存镜像，可以理解为代码控制中的代码仓库

Docker Hub(https://hub.docker.com)提供了庞大的镜像集合供使用



### docker纪要

 [docker1-基础.pdf](Akio's Book.assets\docker\docker1-基础.pdf) 

 [docker2-安装.pdf](Akio's Book.assets\docker\docker2-安装.pdf) 

 [docker3-高级-Dockerfile.pdf](Akio's Book.assets\docker\docker3-高级-Dockerfile.pdf)  

[docker4-仓库.pdf](Akio's Book.assets\docker\docker4-仓库.pdf) 

 [docker5-idea整合 -CA认证.pdf](Akio's Book.assets\docker\docker5-idea整合 -CA认证.pdf) 

 [docker6-图形化工具.pdf](Akio's Book.assets\docker\docker6-图形化工具.pdf) 

 [docker7-Docker-Compose.pdf](Akio's Book.assets\docker\docker7-Docker-Compose.pdf) 

 [docker8-持续集成与持续交付.pdf](Akio's Book.assets\docker\docker8-持续集成与持续交付.pdf) 









## 数据库

 `order BY substring_index( area_id,':', -1) + 0  ASC`

![image-20211207155708488](Akio's Book.assets/image-20211207155708488.png)

https://www.cnblogs.com/QFKing/p/11924380.html







## 注解的开发







## 线程池

### 线程

https://www.twle.cn/c/yufei/javatm/javatm-basic-future.html

https://www.cnblogs.com/westlife-11358/p/10469304.html



参考视频：

https://www.bilibili.com/video/BV1dt4y1i7Gt?from=search&seid=14716473568925631421&spm_id_from=333.337.0.0	用于快速上手

https://www.bilibili.com/video/BV1u7411t7G1?from=search&seid=14716473568925631421&spm_id_from=333.337.0.0

https://www.bilibili.com/video/BV1YN411o7Lz?from=search&seid=1352471604802547590&spm_id_from=333.337.0.0

https://www.bilibili.com/video/BV1ca4y1L7AU?from=search&seid=7037375791473409437&spm_id_from=333.337.0.0

参考博客：

https://cloud.tencent.com/developer/article/1893803

https://blog.csdn.net/weixin_49343190/article/details/115249588

https://blog.csdn.net/qq_20009015/article/details/85953364  包含介绍无界/有界任务队列，直接提交队列

### 线程池

池化思想：线程池、字符串常量池、数据库连接池
提高资源的利用率

没有线程池之前：1、手动创建线程任务 2、执行任务 3、执行完毕，释放线程对象

线程池优点：

- 提高线程的利用率
- 提高程序的响应速度
- 便于同于管理线程对象
- 可以控制最大并发数



### 几种线程池

以下的几种线程池均调用了方法

```java
public ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue<Runnable> workQueue) {
        this(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue,
             Executors.defaultThreadFactory(), defaultHandler);
    }
```

- **带缓存线程池**

  > 使用方法 `ExecutorService executorService = Executors.newCachedThreadPool();`
  >
  > 方法详情
  >
  > ```java
  > public static ExecutorService newCachedThreadPool() {
  >     return new ThreadPoolExecutor(0, Integer.MAX_VALUE,
  >                                   60L, TimeUnit.SECONDS,
  >                                   new SynchronousQueue<Runnable>());
  > }
  > ```

  > 特点：
  >
  > - 核心线程数为0，所有线程都是临时线程，线程可重复利用
  > - 最大线程数为`Integer.MAX_VALUE` ，表示 Java 中的最大整数，意味着线程可以无限创建
  > - 临时线程的最大空闲时间是60s
  > - 任务队列（阻塞队列）的方式为没有容量，来一个任务使用一个线程执行它，任务不会等待
  > - 适合任务数密集，但每个任务执行时间较短的情况
  > - 由于每个线程执行完之后会归还池中，在空闲时间内还可以执行其余任务，故起名为带缓存

- **固定大小线程池**

  > 使用方法`ExecutorService fixedThreadPool = Executors.newFixedThreadPool(n);`
  >
  > - 参数指定 核心线程数 和 最大线程数 的大小
  >
  > 方法详情：
  >
  > ```java
  > public static ExecutorService newFixedThreadPool(int nThreads) {
  >     return new ThreadPoolExecutor(nThreads, nThreads,
  >                                   0L, TimeUnit.MILLISECONDS,
  >                                   new LinkedBlockingQueue<Runnable>());
  > }
  > ```
  >
  > 特点
  >
  > - 核心线程数 == 最大线程数，也就是说没有临时线程
  > - 无需设置临时线程的最大空闲时间
  > - 阻塞队列是无界的，可以存放任意数量的任务
  > - 适用于任务量已知，且相对耗时的任务（推荐使用）

- **单线程线程池**

  > 使用方法 `ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();`
  >
  > 方法详情
  >
  > ```java
  > public static ExecutorService newSingleThreadExecutor() {
  >     return new FinalizableDelegatedExecutorService
  >         (new ThreadPoolExecutor(1, 1,
  >                                 0L, TimeUnit.MILLISECONDS,
  >                                 new LinkedBlockingQueue<Runnable>()));
  > }
  > ```
  >
  > 特点
  >
  > - 核心线程数和最大线程数都是1，没有临时线程
  > - 无需设置临时线程的最大空闲时间
  > - 阻塞队列是无界的，可以存放任意数量的任务
  > - 适用于希望多个任务排队执行的情况
  >
  > 与自己定义一个线程执行任务的区别
  >
  > - 如果自定义的线程出现错误，则程序会终止，队列中的任务都无法执行；而线程池如果当前线程出现错误，还会新建一个线程，保证任务的正常执行

- **时间调度线程池**

  > 使用方法 `ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(n);`
  >
  > - 参数指定核心线程数
  >
  > 方法详情：
  >
  > ```java
  > public static ScheduledExecutorService newScheduledThreadPool(int corePoolSize) {
  >     return new ScheduledThreadPoolExecutor(corePoolSize);
  > }
  > 
  > //ScheduledThreadPoolExecutor继承了ThreadPoolExecutor
  > 
  > public ScheduledThreadPoolExecutor(int corePoolSize) {
  >     super(corePoolSize, Integer.MAX_VALUE, 0, NANOSECONDS,
  >           new DelayedWorkQueue());
  > }
  > ```
  >
  > 特点
  >
  > - 参数指定核心线程数
  > - 最大线程数为 “无限大”
  > - 阻塞队列的方式是具有延迟特性的无界阻塞队列
  > - 由于 `DelayedWorkQueue` 队列属于无界队列，故不会产生临时线程
  >
  > 使用情景1：`schedule` 方法
  >
  > ```java
  > ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(1);
  > 
  > //提交10个任务至线程池
  > for (int i = 0; i < 10; i++) {
  >     final int index = i;
  >     Runnable task = new Runnable() {
  >         public void run() {
  >             System.out.println(new Date().toString()
  >                   + " 第 " + (index + 1) + " 个任务延迟了 " + index + " 秒才运行");
  >         }
  >     };
  > 
  >     //第一个任务延迟1秒执行，第二个任务延迟2秒执行，第三个任务延迟3秒执行...
  >     //会立马将所有任务提交，主线程向下运行，提交之后到底什么时候执行，取决于设定值
  >     ScheduledFuture<?> schedule = scheduledThreadPool.schedule(task, i, TimeUnit.SECONDS);
  > }
  > 
  > //ScheduledExecutorService继承ExecutorService，故可调用父接口方法
  > //执行完所有任务后，关闭线程池
  > scheduledThreadPool.shutdown();
  > ```
  >
  > ![img](Akio's Book.assets/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80OTM0MzE5MA==,size_16,color_FFFFFF,t_70.png)
  >
  > 使用情景2：`scheduleAtFixedRate` 方法
  >
  > ```java
  > ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(5);
  > 
  > //创建任务，每隔一秒执行一次，但每次任务执行时间需要三秒
  > Runnable task = new Runnable() {
  >     public void run() {
  >         try {
  >             System.out.println(new Date().toString() + " " +
  >                                Thread.currentThread().getName() + " 任务执行了！");
  >             Thread.sleep(3000);
  >         } catch (InterruptedException e) {
  >             e.printStackTrace();
  >         }
  >     }
  > };
  > scheduledThreadPool.scheduleAtFixedRate(task, 0, 1, TimeUnit.SECONDS);
  > ```
  >
  > ![img](Akio's Book.assets/20210326163016923.png)
  >
  > 任务的执行时间超过了任务的间隔时间，下一次任务达到了间隔时间准备执行时，发现上一次任务还没有结束，必须等待，当上一次任务执行结束之后，立即启动处于等待状态的下一次任务，所以没有按照设定的间隔时间执行任务
  >
  > 使用情景3：`scheduleWithFixedDelay` 方法
  >
  > ```java
  > ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(5);
  > 
  > //创建任务，一个任务要执行2秒，执行完成之后，再等待1秒开启下一个任务
  > Runnable task = new Runnable() {
  >     public void run() {
  >         try {
  >             System.out.println(new Date().toString() + " " +
  >                                Thread.currentThread().getName() + " 任务执行了！");
  >             Thread.sleep(2000);
  >         } catch (InterruptedException e) {
  >             e.printStackTrace();
  >         }
  >     }
  > };
  > scheduledThreadPool.scheduleWithFixedDelay(task, 0, 1, TimeUnit.SECONDS);
  > ```
  >
  > ![img](Akio's Book.assets/20210326163027973.png)





### 提交优先级和执行优先级









## POSTMAN批量发送请求

https://www.cnblogs.com/l0923/p/13419986.html

https://blog.csdn.net/enthan809882/article/details/105163200?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link





## Jmeter

https://www.bilibili.com/video/BV19b4y1t79V?from=search&seid=15660672082553331946&spm_id_from=333.337.0.0

https://www.processon.com/view/link/60093eeb1e0853406be862f4#map	python自动化测试

---

http://47.107.116.139/showdoc/web/?#/3?page_id=51 Jmeter教程网站 登入密码msxy

---

对Jmeter，Postman一些基本我都会。但是如何真实的在项目中去实施呢？ 

### 一、接口测试分类 

> 内部接口：测试被测系统各个子模块之间的接口，或者被测系统提供给内部系统使用的接口。
>
>  外部接口： 
> 		1.被测系统调用外部的接口。 
> 		2.系统对外提供的接口。
>
>  接口测试重点：检查接口参数传递的正确性，接口功能的正确性，输出结果的正确性，以及对各种异常情况的容错处理，以及权限控制， 分页，调用次数的限制。

### 二、目前接口架构设计

> 1.基于SOAP架构。基于XML规范。基于WebSerice协议。特点：接口地址?wsdl结尾。
>
> 2.基于RPC架构，基于dubbo协议，thrift协议。SpringCloud微服务。 
>
> 3.基于RestFul架构，基于json规范。基于http协议。 
>
> ​			RestFul规则： 接口地址：http://127.0.0.1/user
> ​			get(查询用户)，post（新增用户）, put(修改用户), delete（删除用户） 
>
> ​			Json数据格式：只有两种数据类型。 键值对：{key：value} 数组：[arry1,arry2]

> 既然谈到了http协议
>
> ![image-20211223210459554](Akio's Book.assets/image-20211223210459554.png)
>
> ![image-20211223210528468](Akio's Book.assets/image-20211223210528468.png)
>
> 我们可以使用抓包工具获取一个请求的具体数据，工具是Progress Telerik Fiddler Web Debugger



### 三、市面上的接口测试工具

Jmeter+Ant+Git+Jenkins 

Postman+Newman+Git+Jenkins

soapui，apipost, fildder，charles



### 四、Jmeter简介，安装，环境变量的配置。

基于Java语言压力测试工具，可以做接口测试，也可以做性能测试。 

安装：JDK1.8以上，配置JDK环境变量。



### 五、Jmeter目录介绍

![image-20211223211352767](Akio's Book.assets/image-20211223211352767.png)

> backups：脚本备份目录。格式JMX 
>
> bin目录：存放Jmeter的启动脚本，配置文件。模块文件。
> 		 jmeter.bat 启动Jmeter 
>  		jmeter.properties 核心配置文件。 
>
> docs：离线帮助文档。 
>
> extras：存放与第三方的集成构建文件。集成Ant,Jenkins。
>
> lib目录：存放jar包。 
>
> licensce:许可证文件。



### 六、Jmeter常用组件 

> 1.测试计划：起点。所有组件的容器。 
>
> 2.线程组：代表一定数量的用户。 
>
> 3.取样器：向服务器发送请求的最小单元。 
>
> 4.逻辑控制器：结合取样器实现一些复杂的逻辑。 
>
> 5.前置处理器：在请求之前的工作 
>
> 6.后置处理器：在请求之后的工作 
>
> 7.断言：用于判断请求是否成功。 
>
> 8.定时器：负责在请求之间的延迟间隔。如固定，高斯，随机 
>
> 9.配置元件：配置信息 
>
> 10.监听器：负责收集结果。
>
> 
>
> <font color=red><b>顺序：非常重要</b></font> 
>
> 测试计划》线程组》配置元件》前置处理器》定时器》取样器（请求）》后置处理器》断言》监听器。
>
> <font color=red><b>作用域：非常重要 </b></font>
>
> 必须组件(做测试必须要有)：测试计划，线程组，取样器 
>
> 辅助组件：除了必须组件外
>
> **<i>辅助组件作用于父组件，同级组件，以及同级组件下的所有子组件。</i>**
>
> 两个简单控制器中的查看结果树只能查看对应控制前的java请求1/2。而所属线程组的，同时与两个简单控制器同级的查看结果树可以收集所有的java请求（运行是运行整个测试计划），这一点证明了辅助组件作用于同级组件，以及同级组件下的所有子组件
>
> ![image-20211223212937166](Akio's Book.assets/image-20211223212937166.png)
>
> 以下是在java请求1下添加了一个查看结果树，运行测试计划，发现这个查看结果树也能收集到其父组件的结果，故此证明辅助组件作用于父组件
>
> ![image-20211223213311522](Akio's Book.assets/image-20211223213311522.png)



### 七、Jmeter执行接口测试 

> 1.拿到api接口文档（Fiddler），熟悉接口业务，接口地址，鉴权方式，入参，出参，错误码。 
>
> 2.编写接口测试用例。 
> 			<font color=red>测试思路：</font> 
> 			正例：输入正常入参，查看接口成功返回。 
> 			反例： 
> 					鉴权：空，错误，鉴权过期，鉴权次数限制........ 
> 					参数：空，类型错误，长度错误，错误码的覆盖。 
> 					其他：黑名单、分页。 
>
> 3.使用接口测试工具执行。 
>
> 4.Jmeter+Ant+Git+Jenkins实现持续集成输出接口测试报告。通过电子邮件发送。



### 八、接口测试实战

> 10000，高峰期，10分中内1000个用户，1分钟100个用户。1秒=100/60=5/3
>
> 一般来说，做接口测试，这三个值都是1
>
> ![image-20211223214930387](Akio's Book.assets/image-20211223214930387.png)
>
> Http Cookie管理器，只有在第一次发送请求的时候，服务器会把cookie发送到客户端，以后的客户端对服务端的n次请求都会带上这个cookie。
>
> 加入不要动，他会自动管理
>
> ![image-20211223215506750](Akio's Book.assets/image-20211223215506750.png)
>
> 一般在请求的时候有协议，ip，端口，这些东西在项目中都是固定的



## Actuator生产监控







## Log4j漏洞-JNDI注入

https://www.bilibili.com/video/BV1wb4y1q7Ps?from=search&seid=6489645300758706395&spm_id_from=333.337.0.0

https://cert.360.cn/warning/detail?id=d5dd5bbdfbb3d58c3a633e4e105e22bb

https://mp.weixin.qq.com/s/67q5tabt9T04cQROI1jnkA

https://www.bilibili.com/video/BV1dZ4y197KJ?p=1

https://log4j2-detector.chaitin.cn/







## 全栈之巅

https://www.bilibili.com/video/BV18E41127N4?spm_id_from=333.999.0.0

https://www.bilibili.com/video/BV1A4411Y7fi?spm_id_from=333.999.0.0

https://www.bilibili.com/video/BV1S4411W79F?spm_id_from=333.999.0.0





## 生产回滚







## 服务器负载

https://blog.csdn.net/weixin_41485592/article/details/88639547





## CI/CD

持续集成/持续部署

https://www.bilibili.com/video/BV1zf4y127vu?from=search&seid=9182694068358631743&spm_id_from=333.337.0.0 devops

https://www.bilibili.com/video/BV1Si4y1G7vz?from=search&seid=13026966274522770779&spm_id_from=333.337.0.0





## 阿里云日志的使用





## 支付接入支付需要注意那些

https://blog.csdn.net/qq_40286444/article/details/105708004 	对接三方支付



## debug操作





## git

https://www.bilibili.com/video/BV1FE411P7B3?spm_id_from=333.999.0.0

https://mp.weixin.qq.com/s/Bf7uVhGiu47uOELjmC5uXQ

### 版本控制

### 什么是版本控制

版本控制（Revision control）是一种在开发的过程中用于管理我们对文件、目录或工程等内容的修改历史，方便查看更改历史记录，备份以便恢复以前的版本的软件工程技术。

- 实现跨区域多人协同开发
- 追踪和记载一个或者多个文件的历史记录
- 组织和保护你的源代码和文档
- 统计工作量
- 并行开发、提高开发效率
- 跟踪记录整个软件的开发过程
- 减轻开发人员的负担，节省时间，同时降低人为错误

简单说就是用于管理多人协同开发项目的技术。

没有进行版本控制或者版本控制本身缺乏正确的流程管理，在软件开发过程中将会引入很多问题，如软件代码的一致性、软件内容的冗余、软件过程的事物性、软件开发过程中的并发性、软件源代码的安全性，以及软件的整合等问题。

无论是工作还是学习，或者是自己做笔记，都经历过这样一个阶段！我们就迫切需要一个版本控制工具！



### 常见的版本控制工具

我们学习的东西，一定是当下最流行的！

主流的版本控制器有如下这些：

- **Git**
- **SVN**（Subversion）
- **CVS**（Concurrent Versions System）
- **VSS**（Micorosoft Visual SourceSafe）
- **TFS**（Team Foundation Server）
- Visual Studio Online

版本控制产品非常的多（Perforce、Rational ClearCase、RCS（GNU Revision Control System）、Serena Dimention、SVK、BitKeeper、Monotone、Bazaar、Mercurial、SourceGear Vault），现在影响力最大且使用最广泛的是Git与SVN



### 版本控制分类

**1、本地版本控制**

记录文件每次的更新，可以对每个版本做一个快照，或是记录补丁文件，适合个人用，如RCS。

![image-20211215210505424](Akio's Book.assets/image-20211215210505424.png)

**2、集中版本控制  SVN**

所有的版本数据都保存在服务器上，协同开发者从服务器上同步更新或上传自己的修改

![image-20211215210523519](Akio's Book.assets/image-20211215210523519.png)

所有的版本数据都存在服务器上，用户的本地只有自己以前所同步的版本，如果不连网的话，用户就看不到历史版本，也无法切换版本验证问题，或在不同分支工作。而且，所有数据都保存在单一的服务器上，有很大的风险这个服务器会损坏，这样就会丢失所有的数据，当然可以定期备份。代表产品：SVN、CVS、VSS

**3、分布式版本控制 	Git**

每个人都拥有全部的代码！安全隐患！

所有版本信息仓库全部同步到本地的每个用户，这样就可以在本地查看所有版本历史，可以离线在本地提交，只需在连网时push到相应的服务器或其他用户那里。由于每个用户那里保存的都是所有的版本数据，只要有一个用户的设备没有问题就可以恢复所有的数据，但这增加了本地存储空间的占用。

但不会因为服务器损坏或者网络问题，造成不能工作的情况！

![图片](Akio's Book.assets/640.webp)



### Git与SVN的主要区别

SVN是集中式版本控制系统，版本库是集中放在中央服务器的，而工作的时候，用的都是自己的电脑，所以首先要从中央服务器得到最新的版本，然后工作，完成工作后，需要把自己做完的活推送到中央服务器。集中式版本控制系统是必须联网才能工作，对网络带宽要求较高。

Git是分布式版本控制系统，没有中央服务器，每个人的电脑就是一个完整的版本库，工作的时候不需要联网了，因为版本都在自己电脑上。协同的方法是这样的：比如说自己在电脑上改了文件A，其他人也在电脑上改了文件A，这时，你们两之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。Git可以直接看到更新了哪些代码和文件！

**Git是目前世界上最先进的分布式版本控制系统。**



### Git配置

所有的配置文件，其实都保存在本地！

查看配置 git config -l

![image-20211215213454372](Akio's Book.assets/image-20211215213454372.png)

查看不同级别的配置文件：

```shell
#查看系统config
git config --system --list
　　
#查看当前用户（global）配置
git config --global  --list
```

**Git相关的配置文件：**

1）`Git\etc\gitconfig`  ：Git 安装目录下的 gitconfig   --system 系统级

2）`C:\Users\Administrator\ .gitconfig`   只适用于当前登录用户的配置  --global 全局

![image-20211215213950516](Akio's Book.assets/image-20211215213950516.png)

![image-20211215214019282](Akio's Book.assets/image-20211215214019282.png)

这里可以直接编辑配置文件，我们通过命令设置后会响应到这里。



### 设置用户名与邮箱（用户标识，必要）

当你安装Git后首先要做的事情是设置你的用户名称和e-mail地址。这是非常重要的，因为每次Git提交都会使用该信息。它被永远的嵌入到了你的提交中：

```shell
git config --global user.name "Akio"  #名称
git config --global user.email hao.shi3@dxc.com   #邮箱
```

只需要做一次这个设置，如果你传递了--global 选项，因为Git将总是会使用该信息来处理你在系统中所做的一切操作。如果你希望在一个特定的项目中使用不同的名称或e-mail地址，你可以在该项目中运行该命令而不要`--global`选项。总之--global为全局配置，不加为某个项目的特定配置。



### Git基本理论

#### 三个区域

Git本地有三个工作区域：工作目录（Working Directory）、暂存区(Stage/Index)、资源库(Repository或Git Directory)。如果在加上远程的git仓库(Remote Directory)就可以分为四个工作区域。文件在这四个区域之间的转换关系如下：

![image-20211215214521656](Akio's Book.assets/image-20211215214521656.png)

- Workspace：工作区，就是你平时存放项目代码的地方
- Index / Stage：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息
- Repository：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本
- Remote：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换

本地的三个区域确切的说应该是git仓库中HEAD指向的版本：

![image-20211215214909609](Akio's Book.assets/image-20211215214909609.png)

- Directory：使用Git管理的一个目录，也就是一个仓库，包含我们的工作空间和Git的管理空间。
- WorkSpace：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间。
- .git：存放Git管理信息的目录，初始化仓库的时候自动创建。
- Index/Stage：暂存区，或者叫待提交更新区，在提交进入repo之前，我们可以把所有的更新放在暂存区。
- Local Repo：本地仓库，一个存放在本地的版本库；HEAD会只是当前的开发分支（branch）。
- Stash：隐藏，是一个工作状态保存栈，用于保存/恢复WorkSpace中的临时状态。



#### 工作流程

git的工作流程一般是这样的：

１、在工作目录中添加、修改文件；

２、将需要进行版本管理的文件放入暂存区域；

３、将暂存区域的文件提交到git仓库。

因此，git管理的文件有三种状态：已修改（modified）,已暂存（staged）,已提交(committed)

![image-20211215215531937](Akio's Book.assets/image-20211215215531937.png)



### Git项目搭建

#### 创建工作目录与常用指令

工作目录（WorkSpace)一般就是你希望Git帮助你管理的文件夹，可以是你项目的目录，也可以是一个空目录，建议不要有中文。

日常使用只要记住下图6个命令：

![image-20211215215944469](Akio's Book.assets/image-20211215215944469.png)



#### 本地仓库搭建

创建本地仓库的方法有两种：一种是创建全新的仓库，另一种是克隆远程仓库。

1、创建全新的仓库，需要用GIT管理的项目的根目录执行：

```shell
# 在当前目录新建一个Git代码库
$ git init
```

2、执行后可以看到，仅仅在项目目录多出了一个.git目录，关于版本等的所有信息都在这个目录里面。



#### 克隆远程仓库

1、另一种方式是克隆远程目录，由于是将远程服务器上的仓库完全镜像一份至本地！

```shell
# 克隆一个项目和它的整个代码历史(版本信息)
$ git clone [url]
```



### Git文件操作

#### 文件的四种状态

版本控制就是对文件的版本控制，要对文件进行修改、提交等操作，首先要知道文件当前在什么状态，不然可能会提交了现在还不想提交的文件，或者要提交的文件没提交上。

- Untracked: 未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过git add 状态变为Staged.
- Unmodify: 文件已经入库, 未修改, 即版本库中的文件快照内容与文件夹中完全一致. 这种类型的文件有两种去处, 如果它被修改, 而变为Modified. 如果使用git rm移出版本库, 则成为Untracked文件
- Modified: 文件已修改, 仅仅是修改, 并没有进行其他的操作. 这个文件也有两个去处, 通过git add可进入暂存staged状态, 使用git checkout 则丢弃修改过, 返回到unmodify状态, 这个git checkout即从库中取出文件, 覆盖当前修改 !
- Staged: 暂存状态. 执行git commit则将修改同步到库中, 这时库中的文件和本地文件又变为一致, 文件为Unmodify状态. 执行git reset HEAD filename取消暂存, 文件状态为Modified



#### 查看文件状态

上面说文件有4种状态，通过如下命令可以查看到文件的状态：

```shell
#查看指定文件状态
git status [filename]
#查看所有文件状态
git status
#添加所有文件到暂存区
git add .
#提交暂存区中的内容到本地仓库 -m 提交信息
git commit -m "消息内容"
```



#### 忽略文件

有些时候我们不想把某些文件纳入版本控制中，比如数据库文件，临时文件，设计文件等

在主目录下建立".gitignore"文件，此文件有如下规则：

1. 忽略文件中的空行或以井号（#）开始的行将会被忽略。
2. 可以使用Linux通配符。例如：星号（*）代表任意多个字符，问号（？）代表一个字符，方括号（[abc]）代表可选字符范围，大括号（{string1,string2,...}）代表可选的字符串等。
3. 如果名称的最前面有一个感叹号（!），表示例外规则，将不被忽略。
4. 如果名称的最前面是一个路径分隔符（/），表示要忽略的文件在此目录下，而子目录中的文件不忽略。
5. 如果名称的最后面是一个路径分隔符（/），表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。

```shell
*.txt        #忽略所有 .txt结尾的文件,这样的话上传就不会被选中！
!lib.txt     #但lib.txt除外
/temp        #仅忽略项目根目录下的TODO文件,不包括其它目录temp
build/       #忽略build/目录下的所有文件
doc/*.txt    #会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
```





### Git分支

#### 分支常用命令

```shell
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 新建一个分支，并切换到该分支
git checkout -b [branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```



### 业务场景1：merge rejected

https://blog.csdn.net/aiwaston/article/details/117738262

`git merge ‘你要合入的代码分支’ --allow-unrelated-histories` 然后解决冲突



### 业务场景2：idea同步两个远程

业务场景：我们开发者提交到公司的github仓库，突然客户需要让我们把我们的代码同步到他们仓库。如我们仓库的sprint分支同步到他们仓库的develop分支。

操作：首先，我们需要在idea中添加客户仓库的remotes。不过首先客户公司要提供一个他们仓库的账号和密码

![image-20211215144122940](Akio's Book.assets/image-20211215144122940.png)

![image-20211215144235491](Akio's Book.assets/image-20211215144235491.png)

然后刷新一下分支，可以发现客户仓库的分支也进来了。所以说我们在我们自己的2021-sprint3分支提交代码后。如果客户那边需要同步。我们就切换到客户的kone/develop分支。然后把我们origin/2021-sprint3的分支合并进来。这样kone/develop分支就是最新的代码。然后在这个分支上去push

![image-20211215144432562](Akio's Book.assets/image-20211215144432562.png)

![image-20211215144756427](Akio's Book.assets/image-20211215144756427.png)

![image-20211215144835622](Akio's Book.assets/image-20211215144835622.png)







## sourceTree

 



## 云原生K8s+Docker+KubeSphere+DevOps

https://www.bilibili.com/video/BV13Q4y1C7hS?from=search&seid=13798867737117338959&spm_id_from=333.337.0.0

https://www.yuque.com/leifengyang/oncloud/ctiwgo



## 阿里云漏洞修复

### Nginx基线检查漏洞

![image-20211215181029648](Akio's Book.assets/image-20211215181029648.png)

https://www.php.cn/linux-458757.html#:~:text=linux%E4%B8%8Bnginx%E9%87%8D%E5%90%AF%E5%91%BD%E4%BB%A4%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F%20linux%E4%B8%8Bnginx%E9%87%8D%E5%90%AF%E5%91%BD%E4%BB%A4%E4%B8%BA%EF%BC%9A%E2%80%9Ckill%20-HUP,nginx%E7%9A%84%E8%BF%9B%E7%A8%8B%E5%8F%B7%E2%80%9D%E3%80%82%20%E9%87%8D%E5%90%AF%E6%96%B9%E6%B3%95%EF%BC%9A%E9%A6%96%E5%85%88%E6%9F%A5%E6%89%BE%E5%BD%93%E5%89%8Dnginx%E8%BF%9B%E7%A8%8B%E5%8F%B7%EF%BC%8C%E7%84%B6%E5%90%8E%E8%BE%93%E5%85%A5%E5%91%BD%E4%BB%A4%E2%80%9Ckill%20-HUP%20%E8%BF%9B%E7%A8%8B%E5%8F%B7%E2%80%9D%E5%8D%B3%E5%8F%AF%E5%AE%9E%E7%8E%B0%E9%87%8D%E5%90%AFnginx%E6%9C%8D%E5%8A%A1%E3%80%82



https://www.cnblogs.com/faberbeta/p/13903221.html







## 阿里云日志学习







## Spring核心

https://www.bilibili.com/video/BV1K3411C7dn?from=search&seid=17579069777259600741&spm_id_from=333.337.0.0

### @ComponentScan()



### @ComponentScan()扫描索引

> 对于spring来说，他在扫描之前肯定是不知道哪些类上有@Component注解。所以说只要是这个包下的类或者说接口，他都会去扫描，解析，然后判断有没有@Component注解。有的话继续处理，没有就不处理。但总而言之他都会去扫描所有类。
>
> 对此，spring中提供类一种技术，可以用来扫描索引，就可以提高查询的速度。当你明确知道你的哪些类是bean，你就可以把你的bean相关的类写在一个文件中，在其中配置key-value，key对应你的某个类，通常这个类就是你的bean，value就是对应的注解
>
> ![image-20211223174129956](Akio's Book.assets/image-20211223174129956.png)
>
> 如上图，如果要使用扫描索引就需要在META-INF目录下配置spring.components文件，文件中存放的就是上述的键值对
>
> ```properties
> 我要加载的bean							这个bean的注解
> cn.akio.spring.core.service.UserService=org.springframework.stereotype.Component
> ```
>
> spring会根据这个文件来加载bean，举个例子：spring.components文件中我只定义了UserService，没有定义OrderService，
>
> ```java
> UserService.java
> @Component
> public class UserService {
> }
> 
> OrderService.java
> @Component
> public class OrderService {
> }
> 
> Appconfig.java
> @ComponentScan(value = "cn.akio.spring.core")
> public class Appconfig {
> }
> 
> //因为我定义了spring.components文件，所以这个@Component和@ComponentScan注解都没有意义
> 
> test.java
> public class test {
>     public static void main(String[] args) {
>         AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Appconfig.class);
>         System.out.println(applicationContext.getBean("orderService"));//报错No bean named 'orderService' available
>         System.out.println(applicationContext.getBean("userService"));//成功cn.akio.spring.core.service.UserService@47faa49c
>     }
> }
> ```
>
> 



### @Bean & @Configuration之间的关系





## Spring AOP

https://www.bilibili.com/video/BV1K3411C7dn?from=search&seid=17579069777259600741&spm_id_from=333.337.0.0

https://www.bilibili.com/video/BV1JQ4y1Z79h?from=search&seid=17579069777259600741&spm_id_from=333.337.0.0





## 部署一套完整的企业级K8S集群

https://cloud.tencent.com/developer/article/1821688



## kubectl命令的用法

http://www.codeforest.cn/article/210

https://zhuanlan.zhihu.com/p/364994610

https://blog.csdn.net/qq_29726869/article/details/104363776	在windows电脑上配置kubectl远程操作kubernetes

`kubectl cp uat-wechat-784fb45b98-f2rlt:/springboot/wechat/wechat.log.2021-12-20.0.gz ./wechat.log.2021-12-20.0.gz` 复制容器中的文件出来

`kubectl exec -it uat-wechat-784fb45b98-f2rlt /bin/sh`进入容器



## debug生产环境

https://www.bilibili.com/video/BV1Ef4y137zY

https://arthas.aliyun.com/zh-cn/

