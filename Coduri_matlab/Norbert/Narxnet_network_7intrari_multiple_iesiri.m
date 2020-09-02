    %% Narxnet
    u=input;
    y=judete_target(:,1:length(u));
    u_org=input;
    y_org=judete_target(:,1:length(u));
    y = con2seq(y);%continu in secventa
    u = con2seq(u);%continu in secventa
    d1 = [1:2];
    d2 = [1:2];
    narx_net = narxnet(d1,d2,10);%definim reteaua
    %definim parametri
    narx_net.divideFcn = '';
    narx_net.trainParam.min_grad = 1e-20;
    narx_net.trainParam.goal=1e-32;
    narx_net.trainparam.epochs = 4000;
    narx_net.trainParam.max_fail = 200;
    %preparam datele pentru antrenare
    [p,Pi,Ai,t] = preparets(narx_net,u,{},y);
    narx_net = train(narx_net,p,t,Pi);
    p2=p; %simulam reteaua
    yp = sim(narx_net,p2,Pi);
    y2 = padarray(cell2mat(yp)',2,NaN,'pre')';
       dat=nr_de_reproductie_virus_ziua(1,1:length(input))
    %functia de afisatre
     LegendsStrings = cell(length(nume_jud),1)
	 figure;
     for i=1:length(nume_jud)
         LegendsStrings{i} = string(nume_jud(i));
         hold on
         semilogy(dat,y2(i,:))
     end
     title('Cazuri pe judet date de pe geo-spatial Retea Neuronala fitnet ')
     hold off
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')
  % nesimulat   
   figure;  
      LegendsStrings = cell(length(nume_jud),1)
     for i=1:length(nume_jud)
         LegendsStrings{i} = string(nume_jud(i));
         hold on
         semilogy(dat,y_org(i,:))
     end
     title('Cazuri pe judet date de pe geo-spatial semanl original ')
     hold off
     xticks(0:5:length(dat))
     legend(LegendsStrings, 'Interpreter', 'none')