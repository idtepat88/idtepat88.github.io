var x = [0, 6238, 5326, 7651, 4107, 4576, 7679, 7510, 5193, 4506, 6207, 7897, 7189, 7240, 6234, 4805, 7887, 4836, 7175, 5461, 7183, 6363, 4443, 4241, 7868, 5644, 6824, 6680, 5625, 7073, 4965, 6718, 4420, 7471, 6882, 7578, 7067, 4201, 7738, 6678, 5593, 4159, 5673, 7825, 4066, 4171, 6799, 4464, 7425, 7838, 5114, 4733, 6942, 4435, 7678, 6666, 5932, 7362, 7531, 6590, 4148, 7290, 4184, 5035, 6804, 6307, 6079, 4949, 7833, 7147, 6485, 5379, 6269, 5923, 6801, 7036, 6385, 5279, 5451, 5274, 7525, 7834, 7845, 4850, 4405, 4653, 4838, 7625, 4590, 7867, 5953, 7656, 6046, 4077, 6778, 4183, 4271, 4162, 4045, 4673, 6921, 4122, 7803, 5043, 5006, 4936, 5891, 6917, 4750, 7839, 5014, 5202, 4140, 6256, 5640, 7114, 6177, 4969, 4905, 6386, 7948, 7717, 7095, 6006, 7820, 6530, 5983, 7350, 7228, 5378, 4423, 6109, 7185, 6452, 7670, 5693, 6512, 4717, 4430, 5404, 8068, 5689, 7196, 4564, 5541, 4821, 6738, 6219, 7340, 4193, 5942, 6744, 6742, 4529, 4800, 4794, 7983, 7940, 4749, 5639, 7927, 5610, 4306, 6479, 6061, 6885, 6338, 4631, 4754, 5821, 7615, 5354, 5676, 5826, 5270, 4725, 5263, 6547, 5169, 4621, 6374, 6267, 7791, 6566, 5438, 6789, 6797, 6598, 7724, 5827, 4284, 6608, 6370, 4958, 6450, 7989, 6723, 4250, 4910, 5078, 4259, 7295, 7762, 7131, 7001, 6154, 7284, 4694, 4137, 4331, 4375, 7213, 6356, 4448, 6971, 7473, 7326, 6928, 6457, 4884, 6741, 4915, 6240, 7065, 7194, 6810, 7517, 7452, 7954, 6755, 5886, 6017, 5674, 4499, 6063, 6740, 5868, 7387, 4096, 4753, 6655, 5017, 6172, 4206, 5305, 5449, 6426, 4144, 5876, 5574, 5760, 5569, 7406, 4530, 4978, 6383, 7141, 7514, 4950, 4893, 4521, 7366, 6599, 4355, 4335, 5941, 5552, 6397, 4587, 7801, 7509, 6699, 6399, 4828, 5540, 5474, 5535, 4065, 6210, 7030, 5310, 4211, 4889, 6229, 6674, 7930, 7124, 6500, 5495, 4496, 4075, 6880, 7828, 8024, 4895, 7466, 7088, 7384, 6527, 5586, 7314, 7156, 4228, 5390, 7892, 7045, 6968, 4251, 6275, 6140, 4510, 4163, 7019, 7976, 7016, 6173, 5475, 7947, 7505, 7842, 7778, 6235, 4397, 4758, 6319, 7422, 5399, 6571, 4417, 7259, 4097, 5579, 7480, 6102, 4266, 5811, 6136, 4299, 5591, 7412, 6377, 5990, 5183, 6709, 5584, 7220, 6578, 4533, 5434, 4088, 6467, 6628, 7669, 6273, 4732, 5507, 5393, 8089, 4919, 7894, 7347, 6646, 7622, 5115, 4374, 7400, 7209, 5295, 7432, 5000, 4656, 6960, 5682, 6433, 5104, 7180, 7621, 4482, 4290, 6343, 6488, 6967, 4625, 4778, 5655, 5628, 7990, 6127, 4177, 4204, 5003, 6280, 4908, 4541, 7671, 5978, 4164, 4210, 7051, 7661, 6865];
for (let i = 1; i <= 400; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes();
    if (min < 30) {
        min = 1;
    } else {
        min = 2;
    }
    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 3 || i == 36 || i == 63 || i == 40 || i == 20 || i == 94 || i == 24) {
        xx = xx % 10;
        xx += 82;
    } else {
        xx = xx % 15;
        xx += 83;
    }
    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    percentTxt.innerHTML = xx + "%";
    $("#percent-bar-" + i)
        .attr("aria-valuenow", xx)
        .css("width", xx + "%");
    if (xx < 30) {
        bar.classList.add("red");
    } else if (xx > 70) {
        bar.classList.add("green");
    } else {
        bar.classList.add("yellow");
    }
}
