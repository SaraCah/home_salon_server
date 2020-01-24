const AdminModel = require('../../models/admins')

const Admin = AdminModel.create({})

AdminModel.create({
  role: 'Admin',
  aboutme: `Your needs are of the utmost importance to me and I am committed to meeting those needs at an extremely low price, see Rates & Packages page for cost of all my services.
  
  As a result of this dedication to you, a high percentage of my business is from repeat customers and referrals. 
  
  I would welcome the opportunity to earn your trust and deliver you the best service in the industry.
   
  I am 37 and I'm highly qualified in all aspects of hairdressing with 20 plus years experience. I originally trained in a very prestigious salon in London where I had the privilege to qualify with the very best skills in all colouring and cutting techniques. I have worked in Rome, Milan, Ireland, London and now Australia. I would love the opportunity to get to know you and give you the very best quality of hairdressing at the best prices in Redcliffe. 
   
  The salon you will be coming to is very relaxed and comfortable where you can unwind, sit back and let me take care of the rest. I am open from 5:45am Wednesday, Thursday and Friday so if you'd like to get your hair coloured and cut before work I am sure I can provide a time that suits you.  
  
  I use the best quality products in the salon and if you have any specific needs regarding products please let me know and I will endeavour to meet those needs.`,
  mobile: '0404579007',
  location: 'Redcliffe, QLD 4019'
})
