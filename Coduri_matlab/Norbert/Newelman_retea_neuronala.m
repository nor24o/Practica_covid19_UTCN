
    %%   Create an Elman backpropagation network Decese totale Romania

    P=geo_ro_timp';
    T=geo_ro_decese';
    % occur in a row.  First we arrange these values as sequences.

    Pseq = con2seq(P);
    Tseq = con2seq(T);

    % Here we create a network with one hidden layer of 10 neurons.

    net = newelm(P,T,17);
    net.trainParam.goal=10e-32;
    net.trainparam.epochs = 9000;
    net.trainParam.max_fail = 200;

    net2 = train(net,Pseq,Tseq);

    u=0:1: 600;
    uo= con2seq(u);
    y=sim(net2,uo) ;
    z = seq2con(y);
    op=cell2mat(z);
    figure;
    title('Retea Neuronala Elman')
    plot(u,op,'r')

    hold on
    plot(P,T,'b')
    legend('Retea Neuronala newelm ','Semnal initial')

