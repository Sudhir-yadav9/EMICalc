var EMI=
{
    principal_amount:0,
    roi:0,
    tenureY:0,
    tenureM:0,
    total_amount_with_intrest:0,
    total_intrest:0,
    yearly_amount:0,
    monthly_emi:0,
    amtpaid:0,
    amtremaining:0,

    validateInput:function()
    {
        this.principal_amount=document.getElementById("amt").value;
        this.roi=document.getElementById("roi").value;
        this.tenureY=document.getElementById("tenure").value;

        var amountptrn= /^[0-9]+$/;
        var roiptrn=/^[0-9]+[\.]*[0-9]*$/;
        var Temureptrn=/^[0-9]+[\.]*[0-9]+$/;

        if(this.principal_amount==''||this.roi == '' ||this.tenureY=='')
        {
            alert("Fill all the Details:");
        }
        else if(!amountptrn.test(this.principal_amount))
        {
            alert("Please Provide a valid amount :");
        }
        else if(!roiptrn.test(this.roi))
        {
            alert("Please Provide a valid Intrest Rate :");
        }
        else if(!Temureptrn.test(this.tenureY))
        {
            alert("Please Provide a valid Time perioud :");
        }
        else
        {
            alert("Successfully Submit");
            return true;
        }
    },

       calcMonthly:function()
       {
      
        this.tenureM=Math.round(this.tenureY*12);
        var r=this.roi/12/100;
        var x=1+r;
        var num=Math.pow(x,this.tenureM);
        var deno=num-1;
        this.monthly_emi=Math.round(this.principal_amount*r*num/deno);
        this.yearly_amount= this.monthly_emi*12;
        this.total_amount_with_intrest=this.monthly_emi*this.tenureM;
        this.total_intrest=this.total_amount_with_intrest+this.principal_amount;

       }, 
      

       calcTotal:function()
       {
        let tabll = document.getElementById("tablle");

        var rowcount=tabll.rows.length;
        for(var i=rowcount-1;i>0;i--)
        {
            tabll.deleteRow(i);
        }
       
        for(let i=1;i<=this.tenureY * 12;i++)
        {

            let row=tabll.insertRow(i);
            let cell1=row.insertCell(0);
            let cell2=row.insertCell(1);
            let cell3=row.insertCell(2);
            let cell4=row.insertCell(3);

            this.amtpaid=this.monthly_emi*i;
            this.amtremaining=this.monthly_emi*12*this.tenureY - this.amtpaid;

            cell1.innerHTML = "Month-"+i;
            cell2.innerHTML = this.principal_amount;
            cell3.innerHTML = this.total_amount_with_intrest;
            cell4.innerHTML = this.total_intrest;

       }

       },

       creattablmonthly:function()
       {
           
           
            let tabll = document.getElementById("tablle");

            var rowcount=tabll.rows.length;
            for(var i=rowcount-1;i>0;i--)
            {
                tabll.deleteRow(i);
            }
           
            for(let i=1;i<=this.tenureY * 12;i++)
            {

                let row=tabll.insertRow(i);
                let cell1=row.insertCell(0);
                let cell2=row.insertCell(1);
                let cell3=row.insertCell(2);
                let cell4=row.insertCell(3);

                this.amtpaid=this.monthly_emi*i;
                this.amtremaining=this.monthly_emi*12*this.tenureY - this.amtpaid;

                cell1.innerHTML = "Month-"+i;
                cell2.innerHTML = this.monthly_emi;
                cell3.innerHTML = this.total_amount_with_intrest;
                cell4.innerHTML = this.amtremaining;

           }
       },


       creattablyearly:function()
       {

        let tabll = document.getElementById("tablle");

        var rowcount=tabll.rows.length;
        for(var i=rowcount-1;i>0;i--)
        {
            table.deleteRow(i);
        }
        console.log("Deleted Value");
        for(let i=1;i<=this.tenureY * 12;i++)
        {
            let row=tabll.insertRow(i);
            let cell1=row.insertCell(0);
            let cell2=row.insertCell(1);
            let cell3=row.insertCell(2);
            let cell4=row.insertCell(3);

            this.amtpaid=this.monthly_emi*i;
            this.amtremaining=this.monthly_emi*12*this.tenureY - this.amtpaid;

            cell1.innerHTML =  i+"st-Month";
            cell2.innerHTML = this.tenureY;
            cell3.innerHTML = this.total_amount_with_intrest;
            cell4.innerHTML = this.yearly_amount;
            

       }




       },

      
       

        


    

}
