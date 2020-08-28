    %% Narxnet
    u=geo_ro_timp';
    y=geo_ro_cazuri_totale';

    u_org=geo_ro_timp';
    y_org=geo_ro_cazuri_totale';

    y = con2seq(y);
    u = con2seq(u);

    d1 = [1:2];
    d2 = [1:2];
    narx_net = narxnet(d1,d2,10);
    narx_net.divideFcn = '';
    narx_net.trainParam.min_grad = 1e-20;
    narx_net.trainParam.goal=1e-32;
    narx_net.trainparam.epochs = 4000;
    narx_net.trainParam.max_fail = 200;

    [p,Pi,Ai,t] = preparets(narx_net,u,{},y);

    narx_net = train(narx_net,p,t,Pi,'useParallel','yes','showResources','yes');

   %% ?

    pt=p(:,1:1:100)
    yp = sim(narx_net,pt,Pi,'useParallel','yes','showResources','yes');
    
    %yp2 = padarray(cell2mat(yp)',2,NaN,'pre');
    figure;
    
    plot(u_org(1:100),cell2mat(yp)','r')
    hold on
    plot(u_org,y_org,'b')
    legend( 'org','narxnet');

    %%
    nrx=sp2narx(narx_net)
    timp=0:1:400;
    yp3 = sim(nrx,timp);

    plot(timp,yp3,'r')