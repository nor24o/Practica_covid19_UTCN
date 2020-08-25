
%%   Create an Elman backpropagation network cazuri totale

     %Here is a series of Boolean inputs P, and another sequence T
     % which is 1 wherever P has had two 1's in a row.
 
       P=geo_timp_ro';
       T=geo_cazuri_totale_ro';
 
    % We would like the network to recognize whenever two 1's
    % occur in a row.  First we arrange these values as sequences.
 
       Pseq = con2seq(P);
       Tseq = con2seq(T);
 
    % Here we create a network with one hidden layer of 10 neurons.
 
       net = newelm(P,T,17);
       net.trainParam.goal=1e-32;
       net.trainparam.epochs = 9000;     
       net.trainParam.max_fail = 200;
       

    % Then we train the network with a mean squared error goal of
    % 0.1, and simulate it.
 
      net2 = train(net,Pseq,Tseq);
       
u=0:1: 8900;
 uo= con2seq(u);
       y=sim(net2,uo) ;
       z = seq2con(y);
       op=cell2mat(z)

plot(u,op,'r')

hold on 
plot(P,T,'b')

