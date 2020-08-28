    %%   Create an Linear layer backpropagation network cazuri totale

    %Here is a series of Boolean inputs P, and another sequence T
    % which is 1 wherever P has had two 1's in a row.

    P=geo_ro_timp';
    T=geo_ro_cazuri_totale';

    % We would like the network to recognize whenever two 1's
    % occur in a row.  First we arrange these values as sequences.

    Pseq = con2seq(P);
    Tseq = con2seq(T);

    % Here we create a network with one hidden layer of 10 neurons.

    net = linearlayer(1:5,0.01);
    net.trainParam.epochs = 1000;
    net.trainParam.goal = 1e-32;
    net.trainparam.min_grad=10e-100

    %[net,a,e,pf] = adapt(net,P,T);
    [Xs,Xi,Ai,Ts] = preparets(net,Pseq,Tseq);
    
    net1 = train(net,Xs,Ts,Xi,Ai);
    
   % net1 = train(net,Pseq,Tseq);
    %%
    u=0:1: 400;
    uo= con2seq(u);
    y=sim(net,uo) ;
    z = seq2con(y);
    op=cell2mat(z)
    figure;
    plot(u,op,'r')

    %hold on
    %plot(P,T,'b')