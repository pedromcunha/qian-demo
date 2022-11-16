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
import { createClient, getClient } from "@reservoir0x/reservoir-kit-client";
import { ethers } from "ethers";
export default {
  name: "login",
  data() {
    return {
      types: "pledge",
    };
  },
  mounted() {
  },
  methods: {
    async buyNFT() {
      const reservoirClient = createClient({
        apiBase: "https://api.reservoir.tools",
        // apiKey: "YOUR_API_KEY",
        source: "demo.market",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      reservoirClient.actions.buyToken({
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
      try {
        if (typeof window.ethereum === "undefined") {
          this.$message({
            message: this.$t("navbar.meat"),
            duration: 2000,
            type: "warning",
          });
        } else {
          const provider = new ethers.providers.Web3Provider(window.ethereum)

          // MetaMask requires requesting permission to connect users accounts
          await provider.send("eth_requestAccounts", []);
        }
      } catch (e) {
        if (e.code == 4001) {
              this.$message({
                message: "User rejected the request.",
                duration: 2000,
                type: "warning",
              });
            }
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
