import store from "../../store";
import { createCookie } from "../../helpers/cookie";
import { eventBus } from "../../components/events/bus";
export default {
  data() {
    return {
      user: {},
      blockUI: false,
      alert: {
        content: "hey",
        ok: "Dismiss"
      },
      finalCroppedImage: "",
      croppedImage: "",
      html: `<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>`,
      show: false,
      cropper: null,
      card: {},
      showCart: false,
      addedScholarships: [],
      creditCards: []
    };
  },
  components: {
  },
  mounted() {
    eventBus.$on("apiError", e => {
      eventBus.$emit("unblockUI");
      this.alert.content = e;
      this.$refs.errorDialog.open();
    });
    eventBus.$on("notification", (content, title) => {
      eventBus.$emit("unblockUI");
      this.alert.content = content;
      this.alert.title = title;
      this.$refs.notificationDialog.open();
    });
    eventBus.$on("cropImage", e => {
      this.croppedImage = "";
      this.$refs.imageCropper.open();
    });
    eventBus.$on("blockUI", e => {
      this.blockUI = true;
    });
    eventBus.$on("unblockUI", e => {
      this.blockUI = false;
    });
    eventBus.$on("userUpdated", u => {
      this.user = u || {};
    });
    eventBus.$on("addCreditCard", u => {
      this.$refs.creditCard.open();
    });
  },
  methods: {
    startOver() {
      this.croppedImage = "";
      this.finalCroppedImage = "";
    },
    close() {
      this.croppedImage = "";
      this.finalCroppedImage = "";
      this.$refs.imageCropper.close();
    },
    saveCroppedImage() {
      if (this.finalCroppedImage && this.finalCroppedImage.length) {
        eventBus.$emit("imageCropped", this.finalCroppedImage);
      }

      this.croppedImage = "";
      this.finalCroppedImage = "";
      this.$refs.imageCropper.close();
    },
    start(image) {
      var vm = this;
      var width = image.offsetWidth;
      var height = image.offsetHeight;
      var cropper;
      canvas.width = width;
      canvas.height = height;
      canvas
        .getContext("2d")
        .drawImage(
          image,
          0,
          0,
          image.naturalWidth,
          image.naturalHeight,
          0,
          0,
          width,
          height
        );
      this.cropper = new Cropper(canvas, {
        aspectRatio: 1,
        crop: function() {
          var canvas = vm.cropper.getCroppedCanvas();
          if (canvas) {
            vm.finalCroppedImage = canvas.toDataURL();
          }
        }
      });
    },

    setFile(files) {
      this.croppedImage = URL.createObjectURL(files[0]);
      var vm = this;
      setTimeout(() => {
        var image = document.getElementById("image");
        var canvas = document.getElementById("canvas");
        vm.start(image);
      }, 100);
    },
    cropSuccess(dataUrl) {},
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    addPaymentMethod() {
      eventBus.$emit("addCreditCard");
    },
    loginLogout: function() {
      if (this.user.id) {
        createCookie("foobartoken", "");
        store.user = null;
        eventBus.$emit("userUpdated", {});
        this.user = {};
        this.$router.push("/");
      } else {
        this.$router.push("/login");
      }
    }
  }
};
