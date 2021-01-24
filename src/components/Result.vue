<template>
  <div class="container">
      <div class="row">
        <div class="coll">
          <div class="table">
            <thead>
              <tr>
                <th>Название</th>
                <th>Ссылка</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in packages"
                :key="item.package.name"
                @click="openModal(item)"
              >
                <td>{{ item.package.name }}</td>
                <td>
                  <a :href="item.package.links.homepage" target="_blank">{{
                    item.package.links.homepage
                  }}</a>
                </td>
                <td>{{ item.package.description }}</td>
              </tr>
            </tbody>
          </div>

          
        </div>
        <b-modal
          id="modalPackage"
          :title="activePackage ? activePackage.package.name : ''"
          ok-only
          ok-title="Закрыть"
          ok-variant="danger"
          @hidden="closeModal"
          @ok="closeModal"
        >
          <template v-if="activePackage">
            <p class="mb-2">
              <b>Название:</b> {{ activePackage.package.name }}
            </p>
            <p class="mb-2">
              <b>Ссылка:</b>
              <a :href="activePackage.package.links.homepage" target="_blank">{{
                activePackage.package.links.homepage
              }}</a>
            </p>
            <p><b>Описание</b> {{ activePackage.package.description }}</p>
          </template>
        </b-modal>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Result",
  computed: mapState(["loading", "packages"]),
  data() {
    return {
      activePackage: null,
      perPage: 10,
      currentPage: 1,
    };
  },
  methods: {
    openModal(item) {
      this.activePackage = item;
      this.$bvModal.show("modalPackage");
    },
    closeModal() {
      this.activePackage = null;
      this.$bvModal.hide("modalPackage");
    },
  },
};
</script>

<style lang="scss">
.container {
  padding-top: 20px;
  .coll {
    width: 100%;
    .table {
      tr {
        th {
          width: 50%;
          margin: 5px auto;
        }
      }
    }
  }
}
</style>
