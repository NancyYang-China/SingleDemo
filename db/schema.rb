# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170624084016) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "banners", force: :cascade do |t|
    t.string   "title"
    t.text     "sub_title"
    t.string   "icon"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ckeditor_assets", force: :cascade do |t|
    t.string   "data_file_name",               null: false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.string   "type",              limit: 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.index ["type"], name: "index_ckeditor_assets_on_type", using: :btree
  end

  create_table "infos", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "asset"
  end

  create_table "investment_categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_investment_categories_on_name", unique: true, using: :btree
  end

  create_table "investments", force: :cascade do |t|
    t.string   "title"
    t.string   "logo"
    t.text     "description"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "investment_category_id"
    t.string   "website"
    t.index ["investment_category_id"], name: "index_investments_on_investment_category_id", using: :btree
  end

  create_table "news", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.text     "content"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.integer  "category",    limit: 2, default: 0
    t.string   "image1"
    t.string   "image2"
    t.string   "image3"
    t.string   "image4"
    t.string   "image5"
    t.string   "image6"
  end

  create_table "partners", force: :cascade do |t|
    t.string   "name"
    t.string   "logo"
    t.string   "website"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "recruitments", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.text     "requirement"
    t.string   "email"
    t.integer  "count"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "shengzihuis", force: :cascade do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image1"
    t.string   "image2"
    t.string   "image3"
    t.string   "image4"
    t.string   "image5"
    t.string   "image6"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "investments", "investment_categories"
end
