function narxnet_neuron(timp,data,epoch)

clearvars  net net2 
nume_plot=inputname(2);
%Here is a series of Boolean inputs P, and another sequence T
% which is 1 wherever P has had two 1's in a row.

if isempty(epoch)
    epoch=4000;
end
% if isempty(predict)
%     predict=800;
% end

u=timp';
u_org=timp';
y=data';
y_org=data';

y = con2seq(y);
u = con2seq(u);

d1 = [1:2];
d2 = [1:2];
narx_net = narxnet(d1,d2,10);
narx_net.divideFcn = '';
narx_net.trainParam.min_grad = 1e-20;
narx_net.trainParam.goal=1e-32;
narx_net.trainparam.epochs = epoch;
narx_net.trainParam.max_fail = 200;

[p,Pi,Ai,t] = preparets(narx_net,u,{},y);

narx_net = train(narx_net,p,t,Pi);


yp = sim(narx_net,p,Pi);
yp2 = padarray(cell2mat(yp)',2,NaN,'pos');
plot(u_org,yp2,'r')
hold on
plot(u_org,y_org,'b')
title(nume_plot, 'Interpreter', 'none');

end

%%
%narx_net_closed = closeloop(narx_net);
%view(narx_net)


