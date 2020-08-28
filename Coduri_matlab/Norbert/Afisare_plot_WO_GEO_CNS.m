%% Ploturi Romania date de pe date de pe https://covid19.geo-spatial.org/
figure('Name','Cazuri liniar,logarithmic Romania')
%logatithmic
subplot(2,1,1)
semilogy(geo_ro_timp,[geo_ro_cazuri_totale,geo_ro_cazuri_active,geo_ro_decese,geo_ro_vindecati])
title('logatithmic')
legend('cazuri totale','cazuri active','decese','vindecati')

%liniar
subplot(2,1,2)
plot(geo_ro_timp,[geo_ro_cazuri_totale,geo_ro_cazuri_active,geo_ro_decese,geo_ro_vindecati])
title('liniar')
legend('cazuri totale','cazuri active','decese','vindecati')


%nr teste,cazuri unice
figure('Name','Nr teste ,cazuri unice')
plot(geo_ro_timp,[geo_ro_nr_teste,geo_ro_cazuri_unice])
legend('nr teste','cazuri unice')

%Rata de crestere
figure('Name','Rata de crestere')
plot(geo_ro_timp,geo_ro_rata_de_crestere)
title('Rata de crestere')


%nr_de_reproductie_virus
figure('Name','Nr de reproductie virus')
plot(geo_ro_timp,[nr_de_reproductie_virus_R,nr_de_reproductie_virus_R25,nr_de_reproductie_virus_R75,nr_de_reproductie_virus_R05,nr_de_reproductie_virus_R95,nr_de_reproductie_virus_R025,nr_de_reproductie_virus_R975])
title('Nr de reproductie virus')

%% Ploturi date de pe worldomeres 
%Israel
figure('Name','Cazuri pentru Israel worldomeres')
hold off
hold on
subplot(5,1,1)
plot(wo_timp,wo_Israel_cazuri_totale,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(wo_timp,wo_Israel_cazuri_noi_pe_zi,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(wo_timp,wo_Israel_cazuri_active,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(wo_timp,wo_Israel_decese,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(wo_timp,wo_Israel_decese_pe_zi,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off

%Austria
figure('Name','Cazuri pentru Austria worldomeres')
hold off
hold on
subplot(5,1,1)
plot(wo_timp,wo_Austria_cazuri_totale,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(wo_timp,wo_Austria_cazuri_noi_pe_zi,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(wo_timp,wo_Austria_cazuri_active,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(wo_timp,wo_Austria_decese,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(wo_timp,wo_Austria_decese_pe_zi,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off

%Ungaria
figure('Name','Cazuri pentru Ungaria worldomeres')
hold off
hold on
subplot(5,1,1)
plot(wo_timp,wo_Ungaria_cazuri_totale,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(wo_timp,wo_Ungaria_cazuri_noi_pe_zi,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(wo_timp,wo_Ungaria_cazuri_active,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(wo_timp,wo_Ungaria_decese,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(wo_timp,wo_Ungaria_decese_pe_zi,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off

%Romania
figure('Name','Cazuri pentru Romania worldomeres')
hold off
hold on
subplot(5,1,1)
plot(wo_timp,wo_Romania_cazuri_totale,'r')
xticks(0 :5: 172)
legend('cazuri totale')
subplot(5,1,2)
plot(wo_timp,wo_Romania_cazuri_noi_pe_zi,'r')
xticks(0 :5: 172)
legend('cazuri noi pe zi')
subplot(5,1,3)
plot(wo_timp,wo_Romania_cazuri_active,'m')
xticks(0 :5: 172)
legend('cazuri active')
subplot(5,1,4)
plot(wo_timp,wo_Romania_decese,'b')
xticks(0 :5: 172)
legend('decese')
subplot(5,1,5)
plot(wo_timp,wo_Romania_decese_pe_zi,'b')
xticks(0 :5: 172)
legend('decese pe zi')
hold off

%% Afisare Cazuri totale Israel Austria Ungaria Romania suprapuse worldomeres
figure;
hold off 
hold on

plot(wo_timp,wo_Israel_cazuri_totale,'m')
plot(wo_timp,wo_Austria_cazuri_totale,'b')
plot(wo_timp,wo_Ungaria_cazuri_totale,'black')
plot(wo_timp,wo_Romania_cazuri_totale,'r')
legend('cazuri totale Israel','cazuri totale Austria','cazuri totale Ungaria','cazuri totale Romania')
title('Cazuri totale Israel Austria Ungaria Romania')
xticks(0 :5: 172)


%% diferenta dintre cazuri totlae  https://covid19.geo-spatial.org/ si worldomeres  Romania
%folosim pentru a egala matricele 
B = padarray(geo_ro_timp,10,0,'pre');
%B_tot = padarray(geo_ro_cazuri_totale,10,0,'pre');

figure
hold on 
plot(wo_timp,wo_Romania_cazuri_totale,'r')
plot(wo_timp,geo_ro_cazuri_totale,'black')

legend('cazuri totale Romania worldometer','cazuri totale Romania covid19.geo-spatial')
title('diferenta dintre cazuri totale geo-spatial si worldomeres  Romania')
xticks(0 :5: 172)
hold off

%% diferenta dintre cazuri totlae  https://covid19.geo-spatial.org/ , cns si worldomeres  Romania suprapuse 

B_tots = padarray(cns_cazuri_cazuri_pe_sapt,2,NaN,'pos');

figure('Name','diferenta dintre cazuri totlae  https://covid19.geo-spatial.org/ ,cns si worldomeres  Romania')
hold on 
x=length(wo_Romania_cazuri_noi_pe_sapt_zile)-2;
timp=0:1:x;

semilogy(timp,geo_ro_spatial_cazuri_pe_sapt,'r+')

semilogy(timp,cns_cazuri_cazuri_pe_sapt,'black-')

semilogy(timp,wo_Romania_cazuri_noi_pe_sapt,'b-')

legend('cazuri totale saptamanale covid19.geo-spatial','cazuri totale saptamanale cns','cazuri totale saptamanale worldomeres')
title('Cazurile totale suprapuse pentru Romania ,sursa date covid19.geo-spatial,cns,worldomeres ')
xticks(0 : x)
hold off

%% Cazuri pe judet date de pe geo-spatial
 try
     [numbers, TEXT, everything]  = xlsread( strcat(path,'Norbert\Cazuri_pe_judete_A-Z_tr.xlsx' )) ;
     yu=TEXT(:,1);
     yu(1:2,:)=[];
     vall=numbers;
     vall(1:1,:)=[];
     dat=numbers(1,:)
     LegendsStrings = cell(length(yu),1)
     for i=1:length(yu)
         LegendsStrings{i} = string(yu(i));
         hold on
         plot(dat,vall(i,:))
     end
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')
 catch
     [filename, filepath] = uigetfile( 'Cazuri_pe_judete_A-Z_tr*.xlsx' ) ;
     full_filename = fullfile(filepath, filename);
     [numbers, TEXT, everything] = xlsread( full_filename) ;
     Folder = filepath(1:end-8)
     path=Folder;
          yu=TEXT(:,1);
     yu(1:2,:)=[];
     vall=numbers;
     vall(1:1,:)=[];
     dat=numbers(1,:)
     LegendsStrings = cell(length(yu),1)
     for i=1:length(yu)
         LegendsStrings{i} = string(yu(i));
         hold on
         plot(dat,vall(i,:))
     end
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')
 end
 
 
  %% Cazuri Tari Europa
  try
     [numbers, TEXT, everything] =  xlsread( strcat(path,'Cornestean\Europa_cazuri_confirmate.xlsx' )) ;
     yu=TEXT(:,1);
     yu(1:2,:)=[];
     vall=numbers;
     vall(1:1,:)=[];
     dat=numbers(2,:)
     LegendsStrings = cell(length(yu),1)
     for i=1:length(yu)
         LegendsStrings{i} = string(yu(i));
         hold on
         semilogy(dat,vall(i,:))
     end
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')
 catch
     [filename, filepath] = uigetfile( 'Europa_cazuri_confirmate*.xlsx' ) ;
     full_filename = fullfile(filepath, filename);
     [numbers, TEXT, everything] = xlsread( full_filename) ;
     Folder = filepath(1:end-11)
     path=Folder;
     yu=TEXT(:,1);
     yu(1:2,:)=[];
     vall=numbers;
     vall(1:1,:)=[];
     dat=numbers(2,:)
     LegendsStrings = cell(length(yu),1)
     for i=1:length(yu)
         LegendsStrings{i} = string(yu(i));
         hold on
         semilogy(dat,vall(i,:))
     end
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')
 end




%%


% scipt matlab pt infromatii comune fata de cele de pe 
% https://www.cnscbt.ro/index.php/analiza-cazuri-confirmate-covid19





% worldmeter
% 
% marti seara
% spania,italia,uk,franta,elvetia,germania,[austria,ungaria,israel],usa,portugalia
