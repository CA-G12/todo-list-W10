BEGIN;
INSERT INTO users (name, email, password) values 
 ('Mohammad', 'Mohammad@gmail.com', '$2a$08$mAkMJsk5sqRDZ40fOqvvheJI/OtGqZxJAZ.eyi8o.zdYbRWGMCob.'),
 ('Alan' , 'Alan@gmail.com', 'AlanPassword'),
 ('Ahmed', 'Ahmed@gmail.com', 'AhmedPassword');

 INSERT INTO tasks (title, content, user_id) values
 ('title1','content1',1),
 ('title2','content2',1),
 ('title3','content3',1),
 ('title4','content4',2),
 ('title5','content5',2),
 ('title6','content6',3);
  
 COMMIT;