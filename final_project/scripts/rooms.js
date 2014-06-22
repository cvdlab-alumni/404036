function mk_all_doors(apartment){
      apartment.position.set(-12.3,-10.8,0);
      var door = mk_blind(3.4,4.4,0.3);
      apartment.add(door);
      door.position.set(11,0.3,3);

      var door1=mk_door(1.6,4.2,0.15);
      apartment.add(door1);
      door1.position.set(11.9,7.55,2.9);

      var door2=mk_door(1.6,4.2,0.15);
      door2.rotation.z=Math.PI/2;
      apartment.add(door2);
      door2.position.set(15.05,2.7,2.9);

      var door3=mk_door(1.6,4.2,0.15, 1);
      door3.rotation.z=Math.PI/2;
      apartment.add(door3);
      door3.position.set(10.35,2.7,2.9);

      var door4=mk_door(1.6,4.2,0.15, 1);
      door4.rotation.z=Math.PI/2;
      apartment.add(door4);
      door4.position.set(15.05,8.6,2.9);

      var door5=mk_door(1.6,4.2,0.15);
      door5.rotation.z=Math.PI/2;
      apartment.add(door5);
      door5.position.set(15.05,17.7,2.9);

      var door6=mk_door(1.6,4.2,0.15, 1);
      door6.rotation.z=Math.PI/2;
      apartment.add(door6);
      door6.position.set(10.35,17.7,2.9);

      var door7=mk_door(1.6,4.2,0.15);
      apartment.add(door7);
      door7.position.set(20.0,6.35,2.9);
      return apartment;
}

function mk_all_windows(apartment){
      var window_salone1 = mk_window(2,2.4,0.2);
      apartment.add(window_salone1);
      window_salone1.position.set(3.0,0.15,2.8);

      var window_salone2 = mk_window(2,2.4,0.2);
      apartment.add(window_salone2);
      window_salone2.position.set(6.0,0.15,2.8);

      var window_camera = mk_window(2,2.4,0.2);
      apartment.add(window_camera);
      window_camera.position.set(20.2,0.15,2.8);

      var window_bagno = mk_window(2,2.4,0.2);
      window_bagno.rotation.z=Math.PI/2;
      apartment.add(window_bagno);
      window_bagno.position.set(24.45,8.2,2.8);

      var window_cucina = mk_window(2,2.4,0.2);
      window_cucina.rotation.z=Math.PI/2;
      apartment.add(window_cucina);
      window_cucina.position.set(24.45,16.2,2.8);

      var big_window_salone1 = mk_big_window(3.2,3,0.2);
      big_window_salone1.rotation.z=Math.PI/2;
      apartment.add(big_window_salone1);
      big_window_salone1.position.set(0.15,2.25,2.8);

      var big_window_salone2 = mk_big_window(3.2,3,0.2);
      big_window_salone2.rotation.z=Math.PI/2;
      apartment.add(big_window_salone2);
      big_window_salone2.position.set(0.15,6.88,2.8);

      var big_window_salone3 = mk_big_window(3.2,3,0.2);
      big_window_salone3.rotation.z=Math.PI/2;
      apartment.add(big_window_salone3);
      big_window_salone3.position.set(0.15,11.51,2.8);

      var big_window_salone4 = mk_big_window(3.2,3,0.2);
      big_window_salone4.rotation.z=Math.PI/2;
      apartment.add(big_window_salone4);
      big_window_salone4.position.set(0.15,16.14,2.8);
      return apartment;
}

function mk_all_floors(apartment){
      var floor_camera = mk_plane(1,1,1, 9,5.5, []);
      apartment.add(floor_camera);
      floor_camera.position.set(15,0.8,0.85);

      var floor_bagno = mk_plane(2,1,1, 6.3,5.7,[]);
      apartment.add(floor_bagno);
      floor_bagno.position.set(17.7,6.30,0.85);

      var floor_salone = mk_plane(3,1,1, 9.6,20,[]);
      apartment.add(floor_salone);
      floor_salone.position.set(0.8,0.8,0.85);

      var floor_ingresso = mk_plane(4,1,1, 4.6,7.2,[]);
      apartment.add(floor_ingresso);
      floor_ingresso.position.set(10.4,0.4,0.85);

      var floor_disimpegno = mk_plane(4,1,1, 4.6,8.3,[]);
      apartment.add(floor_disimpegno);
      floor_disimpegno.position.set(10.4,7.6,0.85);

      var floor_corridoio = mk_plane(4,1,1, 4.6,4.6,[]);
      apartment.add(floor_corridoio);
      floor_corridoio.position.set(10.4,16.2,0.85);

      var floor_cucina = mk_plane(4,1,1, 9,14.5,[]);
      apartment.add(floor_cucina);
      floor_cucina.position.set(15,6.45,0.84);
      return apartment;
}

function mk_all_int_walls(apartment){
      var muro_ingr_1 = mk_plane(5,1,1, 4.4,6, [0.5,0, 3.4,4.4]);
      muro_ingr_1.rotation.x = Math.PI/2;
      apartment.add(muro_ingr_1);
      muro_ingr_1.position.set(10.5,0.81,0.8);

      var muro_ingr_2 = mk_plane(5,1,1, 4.4,6, [1.4,0, 1.6,4.2]);
      muro_ingr_2.rotation.x = Math.PI/2;
      apartment.add(muro_ingr_2);
      muro_ingr_2.position.set(10.5,7.40,0.8);

      var muro_ingr_3 = mk_plane(5,1,1, 6.6,6, [1.9,0, 1.6,4.2]);
      muro_ingr_3.rotation.x = Math.PI/2;
      apartment.add(muro_ingr_3);
      muro_ingr_3.rotation.y=Math.PI/2;
      muro_ingr_3.position.set(14.89,0.8,0.8);

      var muro_ingr_4 = mk_plane(5,1,1, 6.6,6, [1.9,0,1.6,4.2]);
      muro_ingr_4.rotation.x = Math.PI/2;
      apartment.add(muro_ingr_4);
      muro_ingr_4.rotation.y=Math.PI/2;
      muro_ingr_4.position.set(10.50,0.8,0.8);

      var muro_dis_1 = mk_plane(5,1,1, 4.4,6, [1.4,0,1.6,4.2]);
      muro_dis_1.rotation.x = Math.PI/2;
      apartment.add(muro_dis_1);
      muro_dis_1.position.set(10.5,7.71,0.8);

      var muro_dis_2 = mk_plane(5,1,1, 4.4, 6,[]);
      muro_dis_2.rotation.x = Math.PI/2;
      apartment.add(muro_dis_2);
      muro_dis_2.position.set(10.5,15.9,0.8);

      var muro_dis_3 = mk_plane(5,1,1, 8.2,6,[0.9,0,1.6,4.2]);
      muro_dis_3.rotation.x = Math.PI/2;
      apartment.add(muro_dis_3);
      muro_dis_3.rotation.y=Math.PI/2;
      muro_dis_3.position.set(14.89,7.7,0.8);

      var muro_dis_4 = mk_plane(5,1,1, 8.2,6, []);
      muro_dis_4.rotation.x = Math.PI/2;
      apartment.add(muro_dis_4);
      muro_dis_4.rotation.y=Math.PI/2;
      muro_dis_4.position.set(10.5,7.7,0.8);

      var muro_cor_1 = mk_plane(5,1,1, 4.4,6, []);
      muro_cor_1.rotation.x = Math.PI/2;
      apartment.add(muro_cor_1);
      muro_cor_1.position.set(10.5,16.21,0.8);

      var muro_cor_2 = mk_plane(5,1,1, 4.4,6, []);
      muro_cor_2.rotation.x = Math.PI/2;
      apartment.add(muro_cor_2);
      muro_cor_2.position.set(10.5,20.8,0.8);

      var muro_cor_3 = mk_plane(5,1,1, 4.6,6, [1.5,0,1.6,4.2]);
      muro_cor_3.rotation.x = Math.PI/2;
      apartment.add(muro_cor_3);
      muro_cor_3.rotation.y=Math.PI/2;
      muro_cor_3.position.set(14.89,16.2,0.8);

      var muro_cor_4 = mk_plane(5,1,1, 4.6,6, [1.5,0,1.6,4.2]);
      muro_cor_4.rotation.x = Math.PI/2;
      apartment.add(muro_cor_4);
      muro_cor_4.rotation.y=Math.PI/2;
      muro_cor_4.position.set(10.5,16.2,0.8);

      var muro_sal_1 = mk_plane(6,1,1, 9.4,6, [2.2,2, 2,2.4, 5.2,2, 2,2.4]);
      muro_sal_1.rotation.x = Math.PI/2;
      apartment.add(muro_sal_1);
      muro_sal_1.position.set(0.8,0.81,0.8);

      var muro_sal_2 = mk_plane(6,1,1, 9.4,6, []);
      muro_sal_2.rotation.x = Math.PI/2;
      apartment.add(muro_sal_2);
      muro_sal_2.position.set(0.8,20.8,0.8);

      var muro_sal_3 = mk_plane(6,1,1, 20,6, [1.44,2, 3.2,3, 6.08,2, 3.2,3, 10.72,2, 3.2,3, 15.36,2, 3.2,3]);
      muro_sal_3.rotation.x = Math.PI/2;
      apartment.add(muro_sal_3);
      muro_sal_3.rotation.y=Math.PI/2;
      muro_sal_3.position.set(0.8,0.8,0.8);

      var muro_sal_4 = mk_plane(6,1,1, 20,6, [1.9,0, 1.6,4.2, 16.9,0, 1.6,4.2]);
      muro_sal_4.rotation.x = Math.PI/2;
      apartment.add(muro_sal_4);
      muro_sal_4.rotation.y=Math.PI/2;
      muro_sal_4.position.set(10.19,0.8,0.8);

      var muro_cam_1 = mk_plane(7,1,1, 9,6, [5.2,2, 2,2.4]);
      muro_cam_1.rotation.x = Math.PI/2;
      apartment.add(muro_cam_1);
      muro_cam_1.position.set(15,0.81,0.8);

      var muro_cam_2 = mk_plane(7,1,1, 9,6, [5,0, 1.6,4.2]);
      muro_cam_2.rotation.x = Math.PI/2;
      apartment.add(muro_cam_2);
      muro_cam_2.position.set(15,6.2,0.8);

      var muro_cam_3 = mk_plane(7,1,1, 5.5,6, []);
      muro_cam_3.rotation.x = Math.PI/2;
      apartment.add(muro_cam_3);
      muro_cam_3.rotation.y=Math.PI/2;
      muro_cam_3.position.set(23.79,0.8,0.8);

      var muro_cam_4 = mk_plane(7,1,1, 5.5,6, [1.9,0, 1.6,4.2]);
      muro_cam_4.rotation.x = Math.PI/2;
      apartment.add(muro_cam_4);
      muro_cam_4.rotation.y=Math.PI/2;
      muro_cam_4.position.set(15.2,0.8,0.8);

      var muro_bag_1 = mk_plane(8,1,1, 6.3,4.5, [2.3,0, 1.6,4.2]);
      muro_bag_1.rotation.x = Math.PI/2;
      apartment.add(muro_bag_1);
      muro_bag_1.position.set(17.7,6.51,0.8);

      var muro_bag_2 = mk_plane(8,1,1, 6.3,4.5, []);
      muro_bag_2.rotation.x = Math.PI/2;
      apartment.add(muro_bag_2);
      muro_bag_2.position.set(17.7,11.9,0.8);

      var muro_bag_3 = mk_plane(8,1,1, 5.7,4.5, []);
      muro_bag_3.rotation.x = Math.PI/2;
      apartment.add(muro_bag_3);
      muro_bag_3.rotation.y = Math.PI/2;
      muro_bag_3.position.set(17.8,6.5,0.8);

      var muro_bag_4 = mk_plane(8,1,1, 5.7,4.5, [1.69,2, 2,2.4]);
      muro_bag_4.rotation.x = Math.PI/2;
      apartment.add(muro_bag_4);
      muro_bag_4.rotation.y = Math.PI/2;
      muro_bag_4.position.set(23.79,6.5,0.8);

      var muro_cuc_1 = mk_plane(9,2,2, 6.3,4.5, []);
      muro_cuc_1.rotation.x = Math.PI/2;
      apartment.add(muro_cuc_1);
      muro_cuc_1.position.set(17.5,12.21,0.8);

      var muro_cuc_2 = mk_plane(9,2,2, 2.3,4.5, []);
      muro_cuc_2.rotation.x = Math.PI/2;
      apartment.add(muro_cuc_2);
      muro_cuc_2.position.set(15.20,6.51,0.8);

      var muro_cuc_3 = mk_plane(9,2,2, 8.6,4.5, []);
      muro_cuc_3.rotation.x = Math.PI/2;
      apartment.add(muro_cuc_3);
      muro_cuc_3.position.set(15.20,20.8,0.8);

      var muro_cuc_4 = mk_plane(9,2,2, 8.6,4.5, [4,2, 2,2.4]);
      muro_cuc_4.rotation.x = Math.PI/2;
      apartment.add(muro_cuc_4);
      muro_cuc_4.rotation.y = Math.PI/2;
      muro_cuc_4.position.set(23.79,12.2,0.8);

      var muro_cuc_5 = mk_plane(9,2,2, 5.7,4.5, []);
      muro_cuc_5.rotation.x = Math.PI/2;
      apartment.add(muro_cuc_5);
      muro_cuc_5.rotation.y = Math.PI/2;
      muro_cuc_5.position.set(17.49,6.50,0.8);

      var muro_cuc_6 = mk_plane(9,2,2, 14.3,4.5, [2.1,0, 1.6,4.2, 11.2,0, 1.6,4.2]);
      muro_cuc_6.rotation.x = Math.PI/2;
      apartment.add(muro_cuc_6);
      muro_cuc_6.rotation.y = Math.PI/2;
      muro_cuc_6.position.set(15.2,6.50,0.8);
      return apartment;
}

function mk_all_ext_walls(apartment){
      var muro_ext_1 = mk_plane(10,2,2, 24.6,6.8, [3,2.8, 2,2.4,   6,2.8, 2,2.4,   11,0.8, 3.4,4.4,   20.2,2.8, 2,2.4]);
      muro_ext_1.rotation.x = Math.PI/2;
      apartment.add(muro_ext_1);
      muro_ext_1.position.set(0,0,0);

      var muro_ext_2 = mk_plane(10,2,2, 24.6,6.8, []);
      muro_ext_2.rotation.x = Math.PI/2;
      apartment.add(muro_ext_2);
      muro_ext_2.position.set(0,21.61,0);

      var muro_ext_3 = mk_plane(10,2,2, 21.6,6.8, [8.2,2.8, 2,2.4,   16.2,2.8, 2,2.4]);
      muro_ext_3.rotation.x = Math.PI/2;
      apartment.add(muro_ext_3);
      muro_ext_3.rotation.y = Math.PI/2;
      muro_ext_3.position.set(24.6,0,0);

      var muro_ext_4 = mk_plane(10,2,2, 21.6,6.8, [2.24,2.8, 3.2,3, 6.88,2.8, 3.2,3, 11.52,2.8, 3.2,3, 16.16,2.8, 3.2,3]);
      muro_ext_4.rotation.x = Math.PI/2;
      apartment.add(muro_ext_4);
      muro_ext_4.rotation.y = Math.PI/2;
      muro_ext_4.position.set(-0.01,0,0);
      
      return apartment;
}