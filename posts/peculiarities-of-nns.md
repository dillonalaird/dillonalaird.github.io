---
title: The Peculiarities of Training Neural Networks
date: '2017-07-04'
---

Neural networks are notoriously difficult to train. They can completely diverge
on one set of parameters and get state-of-the-art results on a slightly
different set of parameters. Over the years I’ve learned several tricks to
training neural networks. A lot of these tricks are well kept secrets in
industry and academics and I think it’s time the rest of the world learned how
neural networks are really trained. So at the risk of being excommunicated from
the deep learning community, here is my write up of the peculiarities of
training neural networks.

While the advancement of artificial intelligence (AI) has led neural networks
closer to obtaining human intelligence, not all networks have moved towards this
path in a straight line. Some networks have also attained more undesirable human
attributes. These are often little discussed and even brushed under the rug for
fear of embarrassment to the deep learning community. But here, I finally
present a formal discussion of some of these abnormalities of training neural
networks.

Cat Images
----------

![](/images/cat.png)


It’s been well known in the deep learning community for a long time that
training neural networks on cat images actually improves performance. Like many
other oddities of neural networks, researchers have absolutely no clue why this
is the case but has been well documented in many amateur papers posted on arxiv.
Some have attributed to happier gradient flows, which have an easier time
updating the weights than say melancholy gradient flows, or gradient flows that
haven’t had their morning coffee. In some instances, researchers have posted
accuracy gains up to 2% on ImageNet. In more recent work, researchers have also
found that feeding the network pictures of Donald Trump led to a whopping 5%
decrease in accuracy. When researchers investigated further, they found that the
network predicted “baboon” about 5% of the time.


"Humbling" Your Network
-----------------------

Some of the more recent networks achieving state-of-the-art results have become
very large and require a lot of hardware to train them. This has led to these
networks developing a slight ego which leads to many issues during test time.
For example Google’s GNMT is known to be an arrogant network because it requires
$500,000 of equipment to train. You might ask it to translate “The duck says
quack.” to German, to which it either outputs “...” or “Really? You want me to
translate that?”. One way to fix this is by humbling your network. You can do
this by feeding it sentences such as, “You’re not that good.” or “You could get
replaced by a linear model and no one would know the difference.” or even “I
could not anneal the learning rate and watch you diverge at any minute.”. For
most people though arrogant networks are not an issue, since only Google runs
their models on half a million dollars of equipment for a month to get
state-of-the-art.

Ritual Sacrifice
----------------

![](/images/nvidia.png)

Ever wonder how deep learning researchers find those obscure hyperparameters? In
school they’ll tell you it’s random searching but there’s a much darker secret
behind them. One way to accomplish this is to sacrifice a GPU before you run
your random hyperparameter search. You can do this by creating a fire sigil on
the ground in the shape of the Nvidia logo and then burning a GPU in the middle
of it. The better the GPU, the better the hyperparameters. It’s rumored that
Google sacrificed 3 Titan X’s to obtain their hyperparameters for “Google’s
Neural Machine Translation System” paper. Since a typical run takes 6 days to
train on 96 NVIDIA K80 GPUs these would have been near impossible to find
otherwise.

Home Field Advantage
--------------------

Another well kept secret at Google is that the closer Jeff Dean is to your GPU
cluster, the faster it runs. This is the real reason Google started developing
the TPU, as an insurance policy for when Jeff Dean leaves. Other large companies
also have their own in house advantage. Yann Lecun gives +3 BLEU score to French
translation models when sitting near the GPUs.
