
% Director principal fisiere

           path='C:\Users\horva\Desktop\Practica\Practica_covid19_UTCN\Database\';
%%
% incarcare date pentru https://covid19.geo-spatial.org/

            try
                Cazuri = xlsread( strcat(path,'Norbert\Cazuri.xlsx' )) ;
            catch
                [filename, filepath] = uigetfile( 'Cazuri*.xlsx' ) ;
                full_filename = fullfile(filepath, filename);
                Cazuri = xlsread( strcat(full_filename)) ;
                Folder = filepath(1:end-8)
                path=Folder;             
            end

geo_ro_timp=Cazuri(:,1);
geo_ro_cazuri_totale=Cazuri(:,2);
geo_ro_cazuri_active=Cazuri(:,3);
geo_ro_decese=Cazuri(:,4);
geo_ro_vindecati=Cazuri(:,5);

%%
% numarul de teste efectuate 
geo_ro_nr_teste=Cazuri(:,6);
geo_ro_cazuri_unice=Cazuri(:,7);

geo_ro_rata_de_crestere=Cazuri(:,8);

geo_ro_frecventa_pe_grupe_varste=Cazuri(:,9);
geo_ro_frecventa_pe_grupe_frecventa=Cazuri(:,10);

%% Numarul de reproducere Sars-cov-2

        Num_reprod = xlsread( strcat(path,'Norbert\Numarul_de_reproductie_Sars-cov.xlsx' )) ;

        numarul_de_judete_de_la   =15;
        numarul_de_judete_pana_la = 20;    
        
        [numbers, TEXT, everything]  = xlsread( strcat(path,'Norbert\Cazuri_pe_judete_A-Z_tr.xlsx' )) ;
        numbers(1,:)=[];
        TEXT(1:2,:)=[];
        nume_jud=TEXT(numarul_de_judete_de_la:numarul_de_judete_pana_la,1);

        nr_de_reproductie_virus_ziua=Num_reprod(1,:);
        nr_de_reproductie_virus_R=Num_reprod(2,:);
        nr_de_reproductie_virus_R25=Num_reprod(2,:);
        nr_de_reproductie_virus_R75=Num_reprod(3,:);
        nr_de_reproductie_virus_R05=Num_reprod(4,:);
        nr_de_reproductie_virus_R95=Num_reprod(5,:);
        nr_de_reproductie_virus_R025=Num_reprod(6,:);
        nr_de_reproductie_virus_R975=Num_reprod(7,:);

        Num_reprod(1,:)=[];
         %input
        judete_target=numbers(numarul_de_judete_de_la:numarul_de_judete_pana_la,:);
        input=Num_reprod;
        
        %verificare
        num_targ_test=numbers(:,1:100);

        input_test=input(:,1:100);

        clear filename Folder full_filename

%% cazuri saptamanale

x=Cazuri(:,18);
geo_ro_spatial_cazuri_pe_sapt = x(~isnan(x));


% date de pe cnscbt
            try
                cnstbt = xlsread( strcat(path,'Norbert\cnscbt.xlsx' )) ;
            catch
                [filename, filepath] = uigetfile( 'cnscbt*.xlsx' ) ;
                full_filename = fullfile(filepath, filename);
                cnstbt = xlsread( full_filename) ;
                Folder = filepath(1:end-8)
                path=Folder;            
            end

cns_cazuri_cazuri_pe_sapt=cnstbt(:,1);

%%   
% date de pe worldomeres 
            try
                AU_HU_IS = xlsread( strcat(path,'Norbert\Australia_Ungaria_Israel_worldometer.xlsx' )) ;
            catch
                [filename, filepath] = uigetfile( 'Australia_Ungaria_Israel_worldometer*.xlsx' ) ;
                full_filename = fullfile(filepath, filename);
                AU_HU_IS = xlsread( full_filename) ;
                Folder = filepath(1:end-8)
                path=Folder;
            end

 
wo_timp=AU_HU_IS(:,1);

% Israel
wo_Israel_cazuri_totale=AU_HU_IS(:,2);
wo_Israel_cazuri_noi_pe_zi=AU_HU_IS(:,3);
wo_Israel_cazuri_active=AU_HU_IS(:,4);
wo_Israel_decese=AU_HU_IS(:,5);
wo_Israel_decese_pe_zi=AU_HU_IS(:,6);

% Ungaria
wo_Ungaria_cazuri_totale=AU_HU_IS(:,7);
wo_Ungaria_cazuri_noi_pe_zi=AU_HU_IS(:,8);
wo_Ungaria_cazuri_active=AU_HU_IS(:,9);
wo_Ungaria_decese=AU_HU_IS(:,10);
wo_Ungaria_decese_pe_zi=AU_HU_IS(:,11);

% Austria
wo_Austria_cazuri_totale=AU_HU_IS(:,12);
wo_Austria_cazuri_noi_pe_zi=AU_HU_IS(:,13);
wo_Austria_cazuri_active=AU_HU_IS(:,14);
wo_Austria_decese=AU_HU_IS(:,15);
wo_Austria_decese_pe_zi=AU_HU_IS(:,16);

% Romania
wo_Romania_cazuri_totale=AU_HU_IS(:,17);
wo_Romania_cazuri_noi_pe_zi=AU_HU_IS(:,18);
wo_Romania_cazuri_active=AU_HU_IS(:,19);
wo_Romania_decese=AU_HU_IS(:,20);
wo_Romania_decese_pe_zi=AU_HU_IS(:,21);

% scoatem termeni NaN
x=AU_HU_IS(:,23);
wo_Romania_cazuri_noi_pe_sapt_zile = x(~isnan(x));

x=AU_HU_IS(:,24);   
wo_Romania_cazuri_noi_pe_sapt = x(~isnan(x));
%wo_Romania_cazuri_noi_pe_sapt = circshift(wo_Romania_cazuri_noi_pe_sapt,-1);
% stergem variabilele neutilizate
clear('AU_HU_IS','Cazuri','x','cnstbt','filename','filepath','Folder','full_filename');



 
 

 



