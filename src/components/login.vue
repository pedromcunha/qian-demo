<template>
  <div class="login">
    <div class="login-btn">
      <span class="btnBox1">
        <button
          type="button"
          class="el-button el-button--primary width40"
          style="margin-bottom: 20px"
          @click="getWeb3()"
        >
          <span> <i class="el-icon-money font18"></i>Metamask </span>
        </button>
      </span>
      <span class="btnBox2">
        <button
          type="button"
          class="el-button el-button--primary width40"
          @click="buyNFT()"
        >
          <span> <i class="el-icon-link font18"></i> buyNFT </span>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import { createClient, getClient } from "@reservoir0x/reservoir-kit-client";
import { ethers } from "ethers";
export default {
  name: "login",
  data() {
    return {
      types: "pledge",
      web3: undefined,
    };
  },
  mounted() {
  },
  methods: {
    async buyNFT() {
      var web3 = new Web3(window.ethereum);
      let Client = createClient({
        apiBase: "https://api.reservoir.tools",
        // apiKey: "YOUR_API_KEY",
        source: "opensea.io",
      });
      const accounts = await web3.eth.getAccounts();
      var address = accounts[0];
      var signer = new ethers.VoidSigner(address, Client);
      getClient()?.actions.buyToken({
        tokens: [
          {
            tokenId: 2,
            contract: "0x97a20815a061eae224c4fdf3109731f73743db73",
          },
        ],
        signer,
        onProgress: (steps) => {
          console.log(steps);
        },
      });
    },
    async getWeb3() {
      var web3 = new Web3(window.ethereum);
      this.web3 = new Web3(window.ethereum);
      var that = this;
      if (typeof window.ethereum === "undefined") {
        this.$message({
          message: this.$t("navbar.meat"),
          duration: 2000,
          type: "warning",
        });
      } else {
        await window.ethereum
          .send("eth_requestAccounts")
          .catch(function (reason) {
            if (reason.code == 4001) {
              that.$message({
                message: "User rejected the request.",
                duration: 2000,
                type: "warning",
              });
            }
          })
          .then(function (accounts) {
            if (accounts) {
              console.log(accounts, "accounts");
            }
          });
      }
    },
  },
};
</script>
<style lang="less" scoped >
.login {
  position: relative;
  .width40 {
    width: 40%;
  }
  .font18 {
    float: left;
    font-size: 18px;
  }
  .login-btn {
    max-width: 1240px;
    padding-bottom: 20%;
    margin: 0 auto;
    padding-top: 15%;
    /deep/.el-button {
      display: block;
      margin: 0 auto;
      background: linear-gradient(-90deg, #ffab0b, #ffd92a) !important;
      color: #fff !important;
      border: none;
      font-size: 20px;
    }
    /deep/.el-button:hover {
      display: block;
      margin: 0 auto;
      background: linear-gradient(-90deg, #ffd92a, #ffab0b) !important;
      color: #fff !important;
      border: none;
      font-size: 20px;
    }
  }
  @media screen and (max-width: 1180px) {
    .width40 {
      width: 60%;
    }
    .login-btn {
      max-width: 1240px;
      margin: 30% auto;
      padding-bottom: 50%;
    }
    .btnBox2 {
      display: none;
    }
  }
}
</style>
