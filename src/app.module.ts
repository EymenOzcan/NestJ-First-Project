import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      // eslint-disable-next-line @typescript-eslint/require-await
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        connectionFactory: (connection) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (connection.readyState === 1) {
            console.log('MongoDB bağlantısı başarılı');
          }
          return connection;
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
